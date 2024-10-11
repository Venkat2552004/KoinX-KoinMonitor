const express = require("express");
const connectToDB = require("./config/db");
const startFetchJob = require("./services/fetchJob");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
startFetchJob();

app.use(express.json());
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
