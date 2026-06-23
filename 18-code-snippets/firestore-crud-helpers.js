import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore();
export async function addUser(uid, data) {
  await setDoc(doc(db, "users", uid), data);
}
export async function getUser(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}
