import { object, string } from "yup";

const createPostDto = object().shape({
  title: string().required(),
  content: string().required(),
  tags: string().required(),
});

export default {
  createPostDto,
};
