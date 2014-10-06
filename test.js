'use strict';

var mount = require('./');
var test = require('ava');

test('return mount point for a file', function (t) {
	t.plan(2);

	mount('index.js', function (err, res) {
		t.assert(!err);
		t.assert(res.mount === '/');
	});
});
