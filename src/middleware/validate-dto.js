import APIError from "@/error/APIError";

const validateDto = (schema) => {
  return async (req, _res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (error) {
      return next(APIError.ValidationError(error));
    }
  };
};

export default validateDto;
