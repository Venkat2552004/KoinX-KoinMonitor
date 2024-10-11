const asyncHandler = require('express-async-handler');
const axios = require('axios');

require('dotenv').config();


const fetchCryptoData = async () => {
    try{
		
		const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`;
		const res = await axios.get(url);
		return res.data;
	}
	catch(err){
		throw new Error("Error occured while fetching crypto data from Coingecko");
	}
	
};

module.exports = fetchCryptoData;