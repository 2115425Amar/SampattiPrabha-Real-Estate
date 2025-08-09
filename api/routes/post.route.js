import express from 'express';
import {verifyToken} from "../middleware/verifyToken.js"
import { addPost, deletePost, getPost, getPosts, updatePost, bulkUploadPosts } from '../controllers/post.controller.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temp folder

router.post("/bulk-upload",verifyToken, upload.single("file"), bulkUploadPosts);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.post("/:id", verifyToken, updatePost);
router.post("/:id", verifyToken, deletePost);

export default router;