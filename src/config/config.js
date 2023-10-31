const path = require("path");
require("dotenv").config();

const serviceAccount = {
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  project_id: process.env.FIREBASE_PROJECT_ID,
};

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseUrl: process.env.FIREBASE_DATABASE_URL,
};

module.exports = { serviceAccount, firebaseConfig };
