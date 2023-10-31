const express = require("express");
const router = express.Router();
const {
  getDocs,
  getDoc,
  createDoc,
  updateDoc,
  deleteDoc,
} = require("../services/firestore/figures");

/**
 * @api {get} /figures/ Get All
 * @apiName GetFigures
 * @apiGroup Figure
 *
 * @apiSuccess {String} id ID of the Figure
 * @apiSuccess {String} name Name of the Figure
 * @apiSuccess {Number} series Series of the Figure
 * @apiSuccess {String} move Move of the Figure
 * @apiSuccess {Number} year Year of the Figure
 * @apiSuccess {String} cardColor Card Color of the Figure
 * @apiSuccess {String} accessories Accessories of the Figure
 */
router.get("/", getDocs);

/**
 * @api {get} /figures/:id Get
 * @apiName GetFigure
 * @apiGroup Figure
 *
 * @apiParam {String} id Figures unique ID
 *
 * @apiSuccess {String} id ID of the Figure
 * @apiSuccess {String} name Name of the Figure
 * @apiSuccess {Number} series Series of the Figure
 * @apiSuccess {String} move Move of the Figure
 * @apiSuccess {Number} year Year of the Figure
 * @apiSuccess {String} cardColor Card Color of the Figure
 * @apiSuccess {String} accessories Accessories of the Figure
 */
router.get("/:id", getDoc);

/**
 * @api {post} /figures/ Create
 * @apiName CreateFigure
 * @apiGroup Figure
 *
 * @apiBody {String} name Name of the Figure
 * @apiBody {Number} series Series of the Figure
 * @apiBody {String} move Move of the Figure
 * @apiBody {Number} year Year of the Figure
 * @apiBody {String} cardColor Card Color of the Figure
 * @apiBody {String} accessories Accessories of the Figure
 *
 * @apiSuccess {String} id ID of the Figure
 * @apiSuccess {String} name Name of the Figure
 * @apiSuccess {Number} series Series of the Figure
 * @apiSuccess {String} move Move of the Figure
 * @apiSuccess {Number} year Year of the Figure
 * @apiSuccess {String} cardColor Card Color of the Figure
 * @apiSuccess {String} accessories Accessories of the Figure
 */
router.post("/", createDoc);

/**
 * @api {post} /figures/:id Update
 * @apiName UpdateFigure
 * @apiGroup Figure
 *
 * @apiParam {String} id Figures unique ID
 *
 * @apiBody {String} name Name of the Figure
 * @apiBody {Number} series Series of the Figure
 * @apiBody {String} move Move of the Figure
 * @apiBody {Number} year Year of the Figure
 * @apiBody {String} cardColor Card Color of the Figure
 * @apiBody {String} accessories Accessories of the Figure
 *
 * @apiSuccess {String} id ID of the Figure
 * @apiSuccess {String} name Name of the Figure
 * @apiSuccess {Number} series Series of the Figure
 * @apiSuccess {String} move Move of the Figure
 * @apiSuccess {Number} year Year of the Figure
 * @apiSuccess {String} cardColor Card Color of the Figure
 * @apiSuccess {String} accessories Accessories of the Figure
 */
router.post("/:id", updateDoc);

/**
 * @api {delete} /figures/:id Delete
 * @apiName DeleteFigure
 * @apiGroup Figure
 *
 * @apiParam {String} id Figures unique ID
 *
 */
router.delete("/:id", deleteDoc);

module.exports = router;
