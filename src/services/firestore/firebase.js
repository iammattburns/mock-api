const admin = require("firebase-admin");
const { serviceAccount, firebaseConfig } = require("../../config/config");
const { cert } = require("firebase-admin/app");

admin.initializeApp({
  credential: cert(serviceAccount),
  databaseURL: firebaseConfig.databaseUrl,
});

const db = admin.firestore();
module.exports = { admin, db };
