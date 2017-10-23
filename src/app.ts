import * as express from 'express';
import * as logger from "morgan";
import * as compression from "compression";

import * as apiController from "./controllers/api";

const app = express();
app.use(compression());
app.use(logger("dev"));
app.set("port", process.env.PORT || 2015);
app.set('x-powered-by', false);

app.get("/api", apiController.getApi);

export default app;
