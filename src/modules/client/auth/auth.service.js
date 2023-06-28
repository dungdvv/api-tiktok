import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import APIError from "@/error/APIError";
import AuthDao from "./auth.dao";

const salt = 10;

class PostService {
  register(postDto) {
    const { email, username, password } = postDto;
    const hashPassword = bcrypt.hashSync(password, salt);
    return AuthDao.register(email, username, hashPassword);
  }

  async login(postDto) {
    const { username, password } = postDto;
    const userFound = await AuthDao.getOne(username);

    if (!userFound) {
      throw APIError.NotFound({
        message: "User not found",
      });
    }

    const match = bcrypt.compareSync(password, userFound.password);

    if (match) {
      delete userFound.password;
      const token = jwt.sign(userFound, "access_token_secret_key");
      return token;
    } else {
      throw APIError.BadRequest({ message: "Password incorrect" });
    }
  }

  getOne(username) {
    return AuthDao.getOne(username);
  }

  getAll() {
    return AuthDao.getAll();
  }
}

export default new PostService();
