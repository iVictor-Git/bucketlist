const {merge} = require('lodash');

const userResolver = require('./user');
const bucketResolver = require('./bucketlist')

module.exports = merge(userResolver, bucketResolver)