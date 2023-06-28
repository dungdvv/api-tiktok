import database from "@/database/knex";

class PhotoDAO {
  async createPhoto(name, url) {
    const [id] = await database("photos")
      .insert({
        name,
        url,
      })
      .returning("id");

    return id;
  }

  async getOne(id) {
    const post = await database("photos").select("*").where("id", id).first();
    return post;
  }
}

export default new PhotoDAO();
