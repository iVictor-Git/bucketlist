const {merge} = require('lodash')
const addUserMutations = require('./user/')
const addBucketlistMutations = require('./bucketlist/');

module.exports = merge(addUserMutations, addBucketlistMutations);
