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

test('return error code ENOENT', function (t) {
	t.plan(2);

	mount('non-existant-file', function (err) {
		t.assert(err);
		t.assert(err.code, 'ENOENT');
	});
});
