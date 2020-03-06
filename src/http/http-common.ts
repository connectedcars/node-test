import http from 'http'

export type HttpIncomingMessage = http.IncomingMessage & Required<Pick<http.IncomingMessage, 'method' | 'url'>>

export type HttpRequestListener = (req: HttpIncomingMessage, res: http.ServerResponse) => void

export class HttpServerError extends Error {
  public statusCode = 500
}

export interface HttpRequest {
  method: string
  url: string
  headers: http.IncomingHttpHeaders
  body: Buffer
}

export type HttpJsonRequest<T> = Omit<HttpRequest, 'body'> & {
  body: T
}

export type HttpTextRequest = Omit<HttpRequest, 'body'> & {
  body: string
}

export async function readBody(req: HttpIncomingMessage): Promise<Buffer> {
  return new Promise(resolve => {
    const body: Buffer[] = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    req.on('end', () => {
      resolve(Buffer.concat(body))
    })
  })
}
