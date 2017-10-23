import * as express from 'express';
import * as logger from "morgan";
import * as compression from "compression";

import * as apiController from "./controllers/api";

const server = express();
server.use(compression());
server.use(logger("dev"));
server.set("port", process.env.PORT || 2015);
server.set('x-powered-by', false);

server.get("/api", apiController.getApi);

server.listen(server.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), server.get("port"), server.get("env"));
  console.log("  Press CTRL-C to stop\n");
});
