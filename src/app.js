import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import methodOverride from "method-override";
import morgan from "morgan";
import path from "path";

import { morganLogFormat } from "./config/constant";
import APIError from "./error/APIError";
import errorConverter from "./error/error-converter";
import errorHandler from "./error/error-handler";
import cors from "./middleware/cors";
import limiter from "./middleware/limiter";
import rootRouter from "./routes";

const app = express();

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// Use package
app.use(helmet());

// just run when deploy. [Maybe some test case over 100 requests]
if (process.env.NODE_ENV === "production") {
  app.use(limiter);
}

// Cross Origin Resource Sharing
app.use(cors);

// Logger
app.use(morgan(morganLogFormat));

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set up for cookies middleware
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "./public")));

// Use router
app.use(rootRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(APIError.NotFound());
});

// if error is not an instanceOf APIError, convert it.
app.use(errorConverter);

// error handler, send stacktrace only during development
app.use(errorHandler);

module.exports = app;
