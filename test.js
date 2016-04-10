import test from 'ava';
import fn from './';

test('return mount point for a file', async t => {
	t.is(await fn('index.js'), '/');
});

test('return custom error when file doesn\'t exist', async t => {
	t.throws(fn('non-existant-file'));
});
