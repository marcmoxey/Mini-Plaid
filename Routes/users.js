import express from "express";
import { createUser, getUser, getUsers, updateUser, deleteUser } from "../Controllers/userController.js";

const router = express.Router();

// Routes

// Get All users
router.get("/", getUsers);

// get single user 
router.get("/:id", getUser);

// Create new user
router.post("/", createUser);

// Update user 
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;