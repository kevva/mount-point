# mount-point [![Build Status](http://img.shields.io/travis/kevva/mount-point.svg?style=flat)](https://travis-ci.org/kevva/mount-point)

> Get the mount point for a file


## Install

```
$ npm install --save mount-point
```


## Usage

```js
var mountPoint = require('mount-point');

mountPoint('foo.tar.gz', function (err, data) {
	console.log(data);
	//=> /
});
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
