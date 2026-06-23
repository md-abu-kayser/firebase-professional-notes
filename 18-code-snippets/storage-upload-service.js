import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const storage = getStorage();
export async function uploadAvatar(uid, file) {
  const storageRef = ref(storage, `avatars/${uid}`);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
}
