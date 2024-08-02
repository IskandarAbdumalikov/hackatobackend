import express from "express";
import {
  getRaces,
  getRaceById,
  createRace,
  updateRace,
  deleteRace,
} from "../controllers/raceController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRaces);
router.get("/:id", getRaceById);
router.post("/", authMiddleware, createRace);
router.put("/:id", authMiddleware, updateRace);
router.delete("/:id", authMiddleware, deleteRace);

export default router;
