import database from "@/database/knex";

class PostDAO {
  async register(email, username, password) {
    const user = await database("user").insert({
      email,
      username,
      password,
    });

    return !!user;
  }

  async getOne(username) {
    const user = await database("user").select("*").where("username", username).first();
    return user;
  }

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
    const users = await database("user").select("*");
    return users;
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
