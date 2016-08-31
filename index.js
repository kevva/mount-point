'use strict';
const df = require('@sindresorhus/df');

module.exports = file => df.file(file).then(data => data.mountpoint);
