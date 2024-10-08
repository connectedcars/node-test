import http from 'http'

import { HttpIncomingMessage, HttpRequest, HttpRequestListener } from './http-common'
import { HttpServerBase } from './http-server-base'

export type HttpServerOptions = http.ServerOptions & {
  listenPort?: number
  requests?: HttpRequest[]
}

export class HttpServer extends HttpServerBase<http.Server> {
  public constructor(options: HttpServerOptions, requestListener: HttpRequestListener) {
    super(
      'http://127.0.0.1',
      http.createServer(options, (req, res) => {
        this.handleRequest(req as HttpIncomingMessage, res, requestListener)
      }),
      options.listenPort,
      options.requests
    )
  }
}
