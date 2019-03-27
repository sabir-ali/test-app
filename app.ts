import * as Express from "express";
import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from "@tsed/common";
import Path = require("path");

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  mount: {
    "/api": "${rootDir}/controllers/**/*.ts"
  },
  acceptMimes: ["application/json"],
  componentsScan: [
    `./services/**/**.js`
  ],
  customServiceOptions: {}
})
export class Server extends ServerLoader {

  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  public $onMountingMiddlewares(): void | Promise<any> {

    const cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      methodOverride = require('method-override');

    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    return;
  }

  public $onReady() {
    console.log('Server started...');
  }

  public $onServerInitError(err: any) {
    console.error(err);
  }
}

new Server().start();