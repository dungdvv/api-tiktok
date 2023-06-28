import database from "@/database/knex";

class PostDAO {
  async createPost(title, content, tags, slug) {
    const [id] = await database("posts")
      .insert({
        title,
        content,
        tags,
        slug,
      })
      .returning("id");

    return id;
  }

  async getAll() {
    const posts = await database("posts").select("*");
    return posts;
  }

  async getOne(id) {
    const post = await database("posts").select("*").where("id", id).first();
    return post;
  }

  async getOneBySlug(slug) {
    const post = await database("posts")
      .select("*")
      .where("slug", slug)
      .first();
    return post;
  }
}

export default new PostDAO();
