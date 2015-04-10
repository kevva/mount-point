'use strict';

var df = require('node-df');

module.exports = function (file, cb) {
	df({file: file.replace(/\s/g, '\\ ')}, function (err, res) {
		if (err && /No such file or directory/i.test(err.message)) {
			err.code = 'ENOENT';
			err.message = '`' + file + '` doesn\'t exist';
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, {
			fs: res[0].filesystem,
			size: res[0].size,
			used: res[0].used,
			available: res[0].available,
			percent: res[0].capacity,
			mount: res[0].mount
		});
	});
};
