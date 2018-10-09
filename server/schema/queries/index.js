const { merge } = require('lodash');

const userQuery = require('./user');
const bucketQuery = require('./bucketlist/');

module.exports = merge(userQuery, bucketQuery);
