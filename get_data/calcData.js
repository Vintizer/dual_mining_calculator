var currencies = require("./currencies");
var calculator = require("./calculator");

module.exports = (ethHashrate, dcrHashrate, cb) => {
	console.log("calcData");
	currencies("eth", function(priceEth) {
		calculator("eth", function(rew) {
			var ethMining = rew * ethHashrate / 1000;
			currencies("dcr", function(priceDcr) {
				calculator("dcr", function(rew) {
					var dcrMining = rew * dcrHashrate / 1000;
					var res = parseFloat(priceEth * ethMining + priceDcr * dcrMining, 10);
					res = Math.round(res * 100) / 100;
					cb(res);
				});
			});
		});
	});
};
