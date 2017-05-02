var request = require('request');
const localeConst = require('../const.json');

module.exports = (cur, cb) => {
	switch (cur) {
		case "eth":
			request('https://whattomine.com/coins.json', function(error, response, body) {
				var hashrateToThousand = 1000 / localeConst.ETH_HASHRATE_WHAT_TO_MINE;
				var rew = parseFloat(JSON.parse(body).coins.Ethereum.estimated_rewards);
				var rew24 = parseFloat(JSON.parse(body).coins.Ethereum.estimated_rewards24);
				rew = hashrateToThousand * (rew + rew24) / 2;
				cb(rew);
			});
			break;
		case "dcr":
			request('https://whattomine.com/coins.json', function(error, response, body) {
				var hashrateToThousand = 1000 / localeConst.DCR_HASHRATE_WHAT_TO_MINE;
				var rew = parseFloat(JSON.parse(body).coins.Decred.estimated_rewards);
				var rew24 = parseFloat(JSON.parse(body).coins.Decred.estimated_rewards24);
				rew = hashrateToThousand * (rew + rew24) / 2;
				cb(rew);
			});
			break;
	}
};
