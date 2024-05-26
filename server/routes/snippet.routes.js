const express = require("express");
const verfiyToken = require("../middlewares/auth");
const {
  createSnippetController,
  getSnippetController,
  updateSnippetController
,deleteSnippetController
} = require("../controllers/snippet.controller");
const router = express.Router();

router.post("/create", verfiyToken, createSnippetController);
router.get("/", verfiyToken, getSnippetController);
router.put("/update/:id",verfiyToken,updateSnippetController)
router.delete("/delete/:id",verfiyToken,deleteSnippetController)
module.exports = router;
