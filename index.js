'use strict';

var df = require('node-df');

/**
 * Get the mount point for a file
 *
 * @param {String} file
 * @param {Function} cb
 * @api public
 */

module.exports = function (file, cb) {
	df({ file: file.replace(/\s/g, '\\ ') }, function (err, res) {
		if (err) {
			if (/No such file or directory/i.test(err.message)) {
				err.message = '`' + file + '` doesn\'t exist';
				err.code = 'ENOENT';
			}

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
