// firestoreService.js
import { db } from "../firebase";
import { collection, doc, setDoc, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";

/**
 * Ghi dữ liệu vào Firestore (insert/update theo số điện thoại)
 * @param {string} phone
 * @param {string} name
 * @param {string} wish
 */
export const saveUserWish = async (phone, name, wish) => {
    try {
        await setDoc(doc(db, "wishes", phone), {
            phone,
            name,
            wish,
            createdAt: new Date(),
        },
            { merge: true });
        return { success: true };
    } catch (error) {
        console.error("Error saving data:", error);
        return { success: false, error };
    }
};

/**
 * Đọc toàn bộ dữ liệu thành list
 */
export const getAllWishes = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "wishes"));
        const list = [];

        querySnapshot.forEach((doc) => {
            list.push(doc.data());
        });

        return list;
    } catch (error) {
        console.error("Error reading data:", error);
        return [];
    }
};

export const listenWishes = (callback) => {
  const q = query(
    collection(db, "wishes"),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const list = snapshot.docs.map((doc) => doc.data());
    callback(list);
  });
};

