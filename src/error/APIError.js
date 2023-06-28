import httpStatus from "http-status";

class ExtendableError extends Error {
  constructor({ message, errors, status, isPublic, stack }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    this.stack = stack;
  }
}

class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super({
      message,
      errors,
      status,
      isPublic,
      stack,
    });
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static NotFound(error) {
    return new APIError({
      message: "Not found",
      status: httpStatus.NOT_FOUND,
      ...error,
    });
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static BadRequest(error) {
    return new APIError({
      message: "Bad request",
      status: httpStatus.BAD_REQUEST,
      ...error,
    });
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static ValidationError(error) {
    return new APIError({
      message: "Validation Error",
      status: httpStatus.BAD_REQUEST,
      ...error,
    });
  }
}

export default APIError;
