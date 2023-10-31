const figureSchema = require("../../models/figure");
const { db } = require("./firebase");

const collection = "figures";

const getDocs = async (req, res) => {
  const querySnapshot = db.collection(collection);
  try {
    querySnapshot.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(201).json(data);
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

const getDoc = async (req, res) => {
  const docId = req.params.id;
  if (!docId) {
    return res.status(400).json({ error: "ID required" });
  }
  const doc = await db.collection(collection).doc(docId).get();

  if (!doc.exists) {
    return res.status(400).json({ error: "Doc does not exist" });
  }

  try {
    res.send({
      id: doc.id,
      ...doc.data(),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

const createDoc = async (req, res) => {
  const doc = req.body;
  if (!doc) {
    return res.status(400).json({ error: "Doc required" });
  }

  const figure = figureSchema.parse({
    name: doc.name || "",
    series: parseInt(doc.series),
    move: doc.move || "",
    year: parseInt(doc.year),
    cardColor: doc.cardColor || "",
    accessories: doc.accessories || "",
  });

  try {
    const docRef = await db.collection(collection).add(figure);
    const docData = await docRef.get();
    res.send({
      id: docData.id,
      ...docData.data(),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

const updateDoc = async (req, res) => {
  const docId = req.params.id;
  const doc = req.body;
  if (!docId) {
    return res.status(400).json({ error: "ID required" });
  }
  if (!doc) {
    return res.status(400).json({ error: "Doc required" });
  }

  const figure = figureSchema.parse({
    name: doc.name || "",
    series: parseInt(doc.series),
    move: doc.move || "",
    year: parseInt(doc.year),
    cardColor: doc.cardColor || "",
    accessories: doc.accessories || "",
  });

  try {
    await db.collection(collection).doc(docId).update(doc);
    const docData = await db.collection(collection).doc(docId).get();
    res.send({
      id: docData.id,
      ...docData.data(),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

const deleteDoc = async (req, res) => {
  const docId = req.params.id;
  if (!docId) {
    return res.status(400).json({ error: "ID required" });
  }
  try {
    await db.collection(collection).doc(docId).delete();
    res.send({
      id: docId,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

module.exports = {
  getDoc,
  getDocs,
  createDoc,
  updateDoc,
  deleteDoc,
};
