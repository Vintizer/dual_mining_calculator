var stopProcess = require("./cmdWork/stopProcess");
var batGenerate = require("./cmdWork/batGenerate");
var batStart = require("./batStart");
var getData = require("./get_data/getDataMain");
var generateReport = require("./report/generateReport");
const localeConst = require('./const.json');

var childPid;

var commonData = {};
var mainFunction = (dcri) => {
	stopProcess(childPid, function() {
		batGenerate(dcri, function() {
			batStart(function(pid) {
				childPid = pid;
				setTimeout(function() {
					getData(function(data) {
						commonData[dcri] = data;
						console.log(dcri + " dcri - $" + commonData[dcri]);
						if (dcri < localeConst.DCRI_STOP) {
							mainFunction(dcri + 1);
						} else {
							generateReport(commonData);
						}
					});
				}, localeConst.TIMEOUT);
			});

		});
	});


};
mainFunction(localeConst.DCRI_START);

//  https://github.com/badmofo/ethereum-mining-calculator/blob/master/compute.py
// https://github.com/karldiab/EthereumClassicMiningCalculator/blob/master/js/app1.js