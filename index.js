'use strict';

var execFile = require('child_process').execFile;

module.exports = function (file, cb) {
	execFile('df', ['-kP', file], function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		stdout = stdout.trim().split('\n').slice(1).map(function (el) {
			var cl = el.split(/\s+(?=[\d\/])/);

			return {
				fs: cl[0],
				size: parseInt(cl[1], 10) * 1024,
				used: parseInt(cl[2], 10) * 1024,
				available: parseInt(cl[3], 10) * 1024,
				percent: parseInt(cl[4], 10) / 100,
				mount: cl[5]
			};
		});

		cb(null, stdout[0]);
	});
};
