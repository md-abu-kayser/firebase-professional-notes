import { getFunctions, httpsCallable } from "firebase/functions";
const functions = getFunctions();
export const addTask = httpsCallable(functions, "addTask");
// Usage: const result = await addTask({ title: 'New Task' });
