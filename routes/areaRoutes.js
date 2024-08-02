import express from "express";
import {
  getAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
} from "../controllers/areaController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAreas);
router.get("/:id", getAreaById);
router.post("/", authMiddleware, createArea);
router.put("/:id", authMiddleware, updateArea);
router.delete("/:id", authMiddleware, deleteArea);

export default router;
