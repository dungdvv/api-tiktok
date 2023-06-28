import express from "express";

import postRoutes from "./post/post.routes";
import authRoutes from "./auth/auth.routes";

const router = express.Router();

router.use("/post", postRoutes);
router.use("/auth", authRoutes);

export default router;
