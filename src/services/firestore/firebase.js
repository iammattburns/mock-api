const admin = require("firebase-admin");
const { serviceAccount, firebaseConfig } = require("../../config/config");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseUrl,
});

const db = admin.firestore();
module.exports = { admin, db };
