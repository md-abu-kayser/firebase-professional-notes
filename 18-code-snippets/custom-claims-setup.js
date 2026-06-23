// In Firebase Admin (server-side)
await admin.auth().setCustomUserClaims(uid, { admin: true });
// Client: force refresh token to apply claims immediately
