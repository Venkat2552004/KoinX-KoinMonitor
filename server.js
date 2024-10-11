const express = require("express");
const router = require('./routes/router')
const connectToDB = require("./config/db");
const startFetchJob = require("./services/fetchJob");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
startFetchJob();

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send({ message: err.message });
});

app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
