import http from 'http'

import { Json } from '../common'

export type HttpIncomingMessage = http.IncomingMessage &
  Required<Pick<http.IncomingMessage, 'method' | 'url'>> & { body?: Buffer }

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

export type HttpJsonRequest<T = Json> = Omit<HttpRequest, 'body'> & {
  body: T | null
}

export type HttpTextRequest = Omit<HttpRequest, 'body'> & {
  body: string
}

export async function readHttpMessageBody(req: HttpIncomingMessage): Promise<Buffer> {
  if (req.body) {
    // If it's already been read, return it
    return req.body
  }
  return new Promise(resolve => {
    const body: Buffer[] = []
    req.on('data', (chunk: Buffer) => {
      body.push(chunk)
    })
    req.on('end', () => {
      // Store the parsed body in the request as it can only be read once
      req.body = Buffer.concat(body)
      resolve(req.body)
    })
  })
}
