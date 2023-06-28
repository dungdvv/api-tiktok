import { DatabaseError } from "pg";

import APIError from "./APIError";
import { CAN_NOT_CONNECT_DATABASE, SOMETHING_WENT_WRONG } from "./error-keys";

export default (err, _req, _res, next) => {
  let convertedError = err;

  if (err instanceof DatabaseError || err?.code === CAN_NOT_CONNECT_DATABASE) {
    convertedError = new APIError({
      message: SOMETHING_WENT_WRONG,
      status: err.status,
      stack: err.stack,
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }

  next(convertedError);
};
