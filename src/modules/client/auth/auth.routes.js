import validateDto from "@/middleware/validate-dto";
import express from "express";
import AuthController from "./auth.controller";
import authDto from "./auth.dto";
import verifyJWT from "@/middleware/verifyToken";

const router = express.Router();

router
  .post("/login", AuthController.login)
  .post("/register", validateDto(authDto.registerDto), AuthController.register)
  .get("/me", verifyJWT, AuthController.getMe)
  .get("/all", AuthController.getAll);
// .get("/", PostController.getAll)
// .get("/:id", PostController.getOne)
// .get("/:slug/slug", PostController.getOneBySlug)
// .post("/", validateDto(postDto.createPostDto), PostController.createPost);

export default router;
