const Crypto = require("../models/crypto");

const fetchKoinStats = async (req, res) => {
	const coin = req.query.coin;

	if (!coin) {
		throw new Error("Coin not found in the request");
	}

	if (!["bitcoin", "matic-network", "ethereum"].includes(coin.toLowerCase())) {
		throw new Error(
			"Invalid Coin, only bitcoin, matic-network and ethereum are allowed"
		);
	}

	try {
		const stats = await Crypto.findOne({ name: coin });
		res.json({
			price: stats.price,
			marketCap: stats.marketCap,
			"24hChange": stats._24hChange,
		});
	} catch (err) {
		throw new Error(`Error occured while fetching stats about ${coin}`);
	}
};

module.exports = fetchKoinStats;
