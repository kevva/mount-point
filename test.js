'use strict';

var mount = require('./');
var test = require('ava');

test('return mount point for a file', function (t) {
	t.plan(2);

	mount('index.js', function (err, res) {
		t.assert(!err, err);
		t.assert(res.mount === '/');
	});
});

test('return custom error when file doesn\'t exist', function (t) {
	t.plan(3);

	mount('non-existant-file', function (err) {
		t.assert(err);
		t.assert(/^`non-existant-file` doesn't exist/i.test(err.message));
		t.assert(err.code, 'ENOENT');
	});
});
