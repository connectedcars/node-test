import http from 'http'

import { HttpIncomingMessage, HttpRequestListener } from './http-common'
import { HttpServerBase } from './http-server-base'

export type HttpServerOptions = http.ServerOptions & { listenPort?: number }

export class HttpServer extends HttpServerBase<http.Server> {
  constructor(options: HttpServerOptions, requestListener: HttpRequestListener) {
    super(
      'http://localhost',
      http.createServer(options, (req, res) => {
        this.handleRequest(req as HttpIncomingMessage, res, requestListener)
      }),
      options.listenPort
    )
  }
}
