import axios from 'axios'
import tls from 'tls'

import { WebServer, WebServerOptions } from './web-server'

export type TestHttpsServerOptions = WebServerOptions

class TestWebServer extends WebServer {
  constructor(options: TestHttpsServerOptions = {}) {
    super(options, (req, res) => {
      // Map the responses
      switch (req.url) {
        case '/': {
          return res.end('Hello world')
        }
        case '/cert': {
          const socket = res.socket as tls.TLSSocket
          if (!socket.authorized) {
            res.statusCode = 403
            return res.end('No client certificate provided or unknown ca')
          }
          const certificate = socket.getPeerCertificate(true)
          return res.end(`Success for client ${certificate.subject.CN}`)
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
  const webServer = new TestWebServer()

  beforeAll(async () => {
    await webServer.start()
  })

  afterAll(async () => {
    await webServer.stop()
  })

  afterEach(async () => {
    webServer.clearRequests()
  })

  it('Simple GET / with http', async () => {
    const response = await axios.get<string>(`${webServer.httpListenUrl}`)
    expect(response.data).toEqual('Hello world')
  })

  it('Simple GET / with https', async () => {
    const response = await axios.get<string>(`${webServer.httpsListenUrl}`, { httpsAgent: webServer.getCaAgent() })
    expect(response.data).toEqual('Hello world')
  })

  it('Simple GET / with https and client cert', async () => {
    const response = await axios.get<string>(`${webServer.httpsListenUrl}/cert`, {
      httpsAgent: WebServer.getDefaultCertAgent()
    })

    expect(response.data).toEqual('Success for client localhost')
  })
})
