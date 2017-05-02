var findAverage = require("./findAverage");
var dataMiner = require("./dataMiner");
var calcData = require("./calcData");


module.exports = (cb) => {
	dataMiner(function(data){
		var averageEth = findAverage(data.eth);
		var averageDcr = findAverage(data.dcr);
		calcData(averageEth, averageDcr, function(price) {
			cb(price);
		});
	});
	
};
