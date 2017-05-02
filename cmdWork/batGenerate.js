var fs = require('fs');


module.exports = (dcri, cb) => {
	console.log("batGenerate");
	var fname = "startDualMiningTest.bat";
	var innerText = "PING 1.1.1.1 -n 1 -w 3000 >NUL \r\n" +
		"EthDcrMiner64.exe" +
		" -epool eu2.ethermine.org:4444 -ewal 0xc907ad492c73af59305a6bac703f87dd5e35c092.sapph -epsw x" +
		" -dpool dcr.coinmine.pl:2222 -dwal vintizer.vinti -dpsw 774 -allpools 1 -gser 1 -dcri " + dcri;
	fs.open(fname, "w+", 644, function(err, file_handle) {
		if (!err) {
			fs.write(file_handle, innerText, null, 'ascii', function(err, written) {
				if (!err) {
					cb();
					// console.log("Текст успешно записан в файл");
				} else {
					// console.log("Произошла ошибка при записи");
				}
			});
		} else {
			// console.log("Произошла ошибка при открытии");
		}
	});
};