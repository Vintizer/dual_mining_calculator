module.exports = () => {
	// const spawn = require('child_process').spawn;
	// const bat = spawn('cmd.exe', ['/c', 'startDualMiningTest.bat'],{ encoding: 'utf8'});
	// bat.stdout.on('data', (data) => {
	// 	console.log(data.toString());
	// });
	// bat.stderr.on('data', (data) => {
	// 	console.log(data.toString());
	// });
	const exec = require('child_process').execFile;
	exec('startDualMiningTest.bat', {encoding: 'windows1251'},
		function(error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		}
	);

};