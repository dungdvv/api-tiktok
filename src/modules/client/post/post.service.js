import { toKebabCase } from "@/utils";
import PostDao from "./post.dao";

class PostService {
  createPost(postDto) {
    const { title, content, tags } = postDto;
    const slug = toKebabCase(title);
    return PostDao.createPost(title, content, tags, slug);
  }

  getAll() {
    return PostDao.getAll();
  }

  getOne(id) {
    return PostDao.getOne(id);
  }

  getOneBySlug(slug) {
    return PostDao.getOneBySlug(slug);
  }
}

export default new PostService();
