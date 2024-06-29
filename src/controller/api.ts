import { Request, Response, NextFunction } from "express";
import { db } from "../config/firebaseConfig";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const userData = req.body;

        await db.collection('users').doc(userId).set(userData, { merge: true });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        next(error);
    }
}

export const fetchUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        const userDoc = await db.collection('users').doc(userId).get();

        if (!userDoc.exists) {
            res.status(404).json({ message: 'User not found' });
            
        } else {
            res.status(200).json(userDoc.data());
        }
    } catch (error) {
        next(error);
    }
}