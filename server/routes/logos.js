import express from "express";

import {
  getLogos,
  getFilteredLogos,
  createLogos,
} from "../controllers/logos.js";

const router = express.Router();

//localhost:5000/posts

router.get("/", getLogos);
router.get("/filter", getFilteredLogos);
router.post("/", createLogos);

export default router;
