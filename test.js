'use strict';

var test = require('ava');
var mountPoint = require('./');

test('return mount point for a file', function (t) {
	t.plan(2);

	mountPoint('index.js', function (err, res) {
		t.assert(!err, err);
		t.assert(res.mount === '/', res.mount);
	});
});

test('return custom error when file doesn\'t exist', function (t) {
	t.plan(3);

	mountPoint('non-existant-file', function (err) {
		t.assert(err, err);
		t.assert(/^`non-existant-file` doesn't exist/i.test(err.message), err.message);
		t.assert(err.code, 'ENOENT', err.code);
	});
});
