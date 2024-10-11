const schedule = require("node-schedule");
const fetchCryptoData = require("./coingeckoService");
const asyncHandler = require("express-async-handler");
const Crypto = require("../models/crypto");

const startFetchJob = asyncHandler(async () => {
	schedule.scheduleJob(
		"0 */2 * * *",
		asyncHandler(async () => {
			const cryptoData = await fetchCryptoData();
			for (const [key, val] of Object.entries(cryptoData)) {
				try {
					await Crypto.updateOne(
						{ name: key },
						{
							$set: {
								price: val.usd,
								marketCap: val.usd_market_cap,
								_24Change: val.usd_24hr_change,
							},
							$push: {
								previousPrices: { value: val.usd, timestamp: new Date() },
							},
						},
						{ upsert: true }
					);
				} catch (err) {
					console.error(`Error updating database for ${key}:`, err);
					throw new Error(`Error updating database for ${key}: ${err.message}`);
				}
			}
			console.log("Latest Koin details are updated");
		})
	);
});

module.exports = startFetchJob;
