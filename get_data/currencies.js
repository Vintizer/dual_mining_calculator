var request = require('request');

module.exports = (cur, cb) => {
	console.log("currencies");
	switch (cur) {
		case "eth":
			request('https://api.coinmarketcap.com/v1/ticker/ethereum/', function (error, response, body) {
				cb(JSON.parse(body)[0].price_usd);
			});
			break;
		case "dcr":
			request('https://api.coinmarketcap.com/v1/ticker/Decred/', function (error, response, body) {
				cb(JSON.parse(body)[0].price_usd);
			});
			break;
	}
};


//https://api.coinmarketcap.com/v1/ticker/ethereum-classic/
//https://api.coinmarketcap.com/v1/ticker/ethereum/
//https://api.coinmarketcap.com/v1/ticker/Decred/
