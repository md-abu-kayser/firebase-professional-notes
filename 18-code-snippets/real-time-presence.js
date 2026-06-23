import {
  getDatabase,
  ref,
  onDisconnect,
  set,
  serverTimestamp,
} from "firebase/database";
const db = getDatabase();
export function trackPresence(uid) {
  const presenceRef = ref(db, `status/${uid}`);
  onDisconnect(presenceRef).set({ online: false });
  set(presenceRef, { online: true, lastSeen: serverTimestamp() });
}
