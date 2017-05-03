module.exports = (cb) => {
	const spawn = require('child_process').spawn;
	const bat = spawn('cmd.exe', ['/c', 'startDualMiningTest.bat'],{ encoding: 'utf8'});
	bat.stdout.on('data', (data) => {
		console.log(data.toString());
	});
	bat.stderr.on('data', (data) => {
		console.log(data.toString());
	});
	
	cb(bat.pid, spawn);
};