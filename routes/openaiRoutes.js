const express = require("express");
const generateContent = require("../controllers/openaiController");
const router = express.Router();

router.post("/generateArticle", generateContent);
module.exports = router;
