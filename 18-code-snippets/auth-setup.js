import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const app = initializeApp({
  /* config */
});
export const auth = getAuth(app);
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
