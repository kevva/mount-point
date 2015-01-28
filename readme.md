# mount-point [![Build Status](http://img.shields.io/travis/kevva/mount-point.svg?style=flat)](https://travis-ci.org/kevva/mount-point)

> Get the mount point for a file

## Install

```sh
$ npm install --save mount-point
```

## Usage

```js
var mount = require('mount-point');

mount('foo.tar.gz', function (err, res) {
	if (err) {
		throw err;
	}

	console.log(res);
	//=> { fs: /dev/sda2, size: 487546976, used: 164493356, available: 322797620, percent: 0.34, mount: '/' }
});
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
