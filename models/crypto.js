const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
	name: String,
	price: Number,
	marketCap: Number,
	_24hChange: Number,
	previousPrices: [
		{
			value: Number,
			timestamp: { type: Date, default: Date.now },
		},
	],
	timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Crypto", cryptoSchema);
