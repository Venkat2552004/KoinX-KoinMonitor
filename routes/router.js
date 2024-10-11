const express = require("express");
const fetchKoinStats = require("../controllers/statsController");

const asyncHanlder = require('express-async-handler');
const router = express.Router();

router.route("/stats").get(asyncHanlder(fetchKoinStats));

module.exports = router;