var request = require('request');
const cheerio = require("cheerio");

module.exports = (cb) => {
	var minerData = {
		eth: [],
		dcr: []
	};
	request('http://localhost:3333/', function(error, response, body) {
		const $ = cheerio.load(body);
		$("font[color=#00ffff]").each(function(i, e) {
			var data = e.children[0].data.replace("\r\n", "");
			if (data.indexOf("ETH - Total") > -1) {
				var mh = parseFloat(data.split("ETH - Total Speed: ")[1]
					.split("Mh/s")[0]);
				minerData.eth.push(mh);
			}
		});
		$("font[color=#ffff00]").each(function(i, e) {
			var data = e.children[0].data.replace("\r\n", "");
			if (data.indexOf("DCR - Total") > -1) {
				var mh = parseFloat(data.split("DCR - Total Speed: ")[1]
					.split("Mh/s")[0]);
				minerData.dcr.push(mh);
			}
		});
		cb(minerData);
	});
};
