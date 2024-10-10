const mongoose = require("mongoose");

require("dotenv").config();

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`Successfully connected to KoinMonitor Database in MongoDB`);
	} catch (err) {
		console.log(`Error occured while connecting to the Database`);
	}
};

module.exports = connectToDB;
