import axios from 'axios'

import { readHttpMessageBody } from './http-common'
import { HttpServer, HttpServerOptions } from './http-server'

type TestHttpServerOptions = HttpServerOptions

class TestHttpServer extends HttpServer {
  public constructor(options: TestHttpServerOptions = {}) {
    super(options, async (req, res) => {
      // Map the responses
      switch (req.url) {
        case '/': {
          if (req.method === 'POST') {
            const body = await readHttpMessageBody(req)
            return res.end(`Hello world: ${body.toString()}`)
          }
          return res.end('Hello world')
        }
        case '/json': {
          const body = this.getLastRequest()?.body
          return res.end(body)
        }
        default: {
          res.statusCode = 404
          return res.end('Not found')
        }
      }
    })
  }
}

describe('HttpServer', () => {
  const httpServer = new TestHttpServer()

  beforeAll(async () => {
    await httpServer.start()
  })

  afterAll(async () => {
    await httpServer.stop()
  })

  afterEach(async () => {
    httpServer.reset()
  })

  it('Simple GET /', async () => {
    const response = await axios.get<string>(`${httpServer.listenUrl}`)
    expect(response.data).toEqual('Hello world')
    expect(httpServer.getTextRequests()).toMatchObject([
      {
        body: '',
        method: 'GET',
        url: '/'
      }
    ])
  })

  it('Simple POST /', async () => {
    const response = await axios.post<string>(`${httpServer.listenUrl}`, 'Hello')
    expect(response.data).toEqual('Hello world: Hello')
    expect(httpServer.getTextRequests()).toMatchObject([
      {
        body: 'Hello',
        method: 'POST',
        url: '/'
      }
    ])
    expect(httpServer.getLastTextRequest()).toMatchObject({
      body: 'Hello',
      method: 'POST',
      url: '/'
    })

    // We have this to test that http requests are stable
    expect(httpServer.getTextRequests()).toMatchSnapshot([
      {
        headers: {
          'user-agent': expect.any(String),
          connection: expect.any(String)
        }
      }
    ])
    expect(httpServer.getLastTextRequest()).toMatchSnapshot({
      headers: {
        'user-agent': expect.any(String),
        connection: expect.any(String)
      }
    })
  })

  it('should GET /json and return json requests', async () => {
    const response = await axios.post<string>(`${httpServer.listenUrl}/json`, { test: 'data' })
    expect(response.data).toMatchObject({ test: 'data' })

    const requests = httpServer.getJsonRequests()
    expect(requests).toMatchObject([
      {
        body: { test: 'data' },
        method: 'POST',
        url: '/json'
      }
    ])
    expect(httpServer.getLastJsonRequest()).toMatchObject({
      body: { test: 'data' },
      method: 'POST',
      url: '/json'
    })

    // We have this to test that http requests are stable
    expect(requests).toMatchSnapshot([
      {
        headers: {
          'user-agent': expect.any(String),
          connection: expect.any(String)
        }
      }
    ])
    expect(httpServer.getLastJsonRequest()).toMatchSnapshot({
      headers: {
        'user-agent': expect.any(String),
        connection: expect.any(String)
      }
    })

    // Validate types
    expect(httpServer.getJsonRequests()[0].body).toMatchObject({ test: 'data' })
    expect(httpServer.getJsonRequests<{ test: string }>()[0].body?.test).toEqual('data')
  })
})
