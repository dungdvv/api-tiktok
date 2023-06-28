import { object, string } from "yup";

const registerDto = object().shape({
  email: string().required(),
  username: string().required(),
  password: string().required(),
});

export default {
  registerDto,
};
