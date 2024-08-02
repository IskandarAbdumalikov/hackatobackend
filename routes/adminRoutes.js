import express from "express";
import {
  getAllUsersForAdmin,
  updateUserRole,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js"; // You need to implement this

const router = express.Router();

// Apply adminMiddleware to ensure only admins can access these routes
router.get("/users", authMiddleware, adminMiddleware, getAllUsersForAdmin);
router.put("/users/:id/role", authMiddleware, adminMiddleware, updateUserRole);

export default router;
