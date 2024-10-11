const express = require("express");
const fetchKoinStats = require("../controllers/statsController");
const calculateDeviation = require("../controllers/deviationController");
const asyncHanlder = require('express-async-handler');
const router = express.Router();

router.route("/stats").get(fetchKoinStats);
router.route("/deviation").get(asyncHanlder(calculateDeviation));
router.all("*", () => {
    throw new Error(
			"Please check the URL or visit https://github.com/Venkat2552004/KoinX-KoinMonitor/blob/main/README.md"
		);
});

module.exports = router;