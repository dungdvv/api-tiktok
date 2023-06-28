import express from "express";

import admin from "@/modules/admin";
import client from "@/modules/client";

const router = express.Router();

router.get("/", (_req, res) => res.json({ message: "App is running" }));

// load routes for client.
router.use("/", client);
// lad routes for admin.
router.use("/admin", admin);

export default router;
