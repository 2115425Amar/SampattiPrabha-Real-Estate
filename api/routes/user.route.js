import express from 'express';
import { deleteUser, getUser, getUsers, updateUser, savePost, profilePosts, getNotificationNumber } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { getAdmins } from '../controllers/user.controller.js';

const router = express.Router()

router.get("/getusers",verifyToken, getUsers);
router.put("/:id",verifyToken,updateUser);
router.delete("/:id",verifyToken,deleteUser);
router.post("/save",verifyToken, savePost);
// router.post("/profilePosts",verifyToken, profilePosts);
router.get("/profilePosts",verifyToken, profilePosts);
router.get("/notification", verifyToken, getNotificationNumber);
router.get("/admins", getAdmins);

export default router;