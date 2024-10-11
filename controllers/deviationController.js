const Crypto = require("../models/crypto");
const asyncHandler = require("express-async-handler");

const calculateDeviation = async (req, res) => {
	const coin = req.query.coin;

	if (!coin) {
		throw new Error("Coin not found in the request. Check the url");
	}

	if (!["bitcoin", "matic-network", "ethereum"].includes(coin.toLowerCase())) {
		throw new Error(
			"Invalid Coin, only bitcoin, matic-network and ethereum are allowed"
		);
	}

	try {
		const result = await Crypto.aggregate([
			{ $match: { name: coin } },
			{
				$project: {
					previousPrices: { $slice: ["$previousPrices", -100] },
				},
			},
			{ $unwind: "$previousPrices" },
			{
				$group: {
					_id: null,
					stdDev: { $stdDevPop: "$previousPrices.value" },
				},
			},
		]);

		if (result.length === 0) {
			throw new Error("No data found for the specified coin");
		}

		res.json({
			deviation: result[0].stdDev,
		});
	} catch (err) {
		throw new Error("Error occurred while calculating deviation");
	}
};

module.exports = calculateDeviation;
