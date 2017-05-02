module.exports = (pid, cb) => {
	console.log("stopProcess");
	if (pid) {
		process.kill(pid);
	}
	cb();
};