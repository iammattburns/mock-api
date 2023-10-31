const express = require("express");
const router = express.Router();
const {
  getDocs,
  getDoc,
  createDoc,
  updateDoc,
  deleteDoc,
} = require("../services/firestore/figures");

router.get("/", getDocs);

router.get("/:id", getDoc);

router.post("/", createDoc);

router.post("/:id", updateDoc);

router.delete("/:id", deleteDoc);

module.exports = router;
