'use strict';

var df = require('@sindresorhus/df');

module.exports = function (file, cb) {
	df.file(file, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data.mountpoint);
	});
};
