import httpStatus from "http-status";

import { env } from "@/config/constant";

export default (err, _req, res, _next) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (env !== "development") {
    delete response.stack;
  }

  return res.status(err.status).json(response);
};
