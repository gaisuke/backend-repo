import { Router } from "express";
import { updateUser,fetchUser } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.put('/:id', authMiddleware, updateUser);
router.get('/:id', authMiddleware, fetchUser);

export default router;