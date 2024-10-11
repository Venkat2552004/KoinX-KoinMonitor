const express = require("express");
const fetchKoinStats = require("../controllers/statsController");
const calculateDeviation = require("../controllers/deviationController");


const asyncHanlder = require('express-async-handler');
const router = express.Router();

router.route("/stats").get(asyncHanlder(fetchKoinStats));
router.route("/deviation").get(asyncHanlder(calculateDeviation));

module.exports = router;