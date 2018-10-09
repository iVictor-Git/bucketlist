const {merge} = require('lodash')
const addUserMutation = require('./user/add_user')
const addBucketlistMutation = require('./bucketlist/add_bucket_list');

module.exports = merge(addUserMutation, addBucketlistMutation);
