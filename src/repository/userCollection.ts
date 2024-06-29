import { db } from '../config/firebaseConfig';

const USERS_COLLECTION = 'users';

export const fetchUser = async (userId: string) => {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();

    return userDoc.exists ? userDoc.data() : null;
};

export const updateUser = async (userId: string, userData: any) => {
    await db.collection(USERS_COLLECTION).doc(userId).set(userData, { merge: true });
};