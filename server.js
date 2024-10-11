const express = require("express");
const router = require("./routes/router");
const connectToDB = require("./config/db");
const startFetchJob = require("./services/fetchJob");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
startFetchJob();

app.use(express.json());
app.use("/api", router);
app.use("*", () => {
	throw new Error(
		"Please check the URL or visit https://github.com/Venkat2552004/KoinX-KoinMonitor/blob/main/README.md to understand more"
	);
});

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
