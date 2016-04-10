'use strict';
var test = require('ava');
var mountPoint = require('./');

test('return mount point for a file', function (t) {
	t.plan(1);

	mountPoint('index.js').then(function (data) {
		t.assert(data === '/', data);
	});
});

test('return custom error when file doesn\'t exist', function (t) {
	t.plan(1);

	mountPoint('non-existant-file').catch(function (err) {
		t.assert(err.code === 'ENOENT', err.code);
	});
});
