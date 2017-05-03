module.exports = (pid, spawn, cb) => {
	spawn('cmd.exe', ['+']);
	console.log("stopProcess");
	// if (pid) {
	// 	process.kill(pid);
	// }
	cb();
};