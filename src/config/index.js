const path = require('path');
const _ = require('lodash');

// Base config
const base = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '../../'),
    port: process.env.PORT,
};

// Overide base config with environment
module.exports = _.merge(base, require('./evironment/' + process.env.NODE_ENV + '.js'));
