const {merge} = require('lodash')

const AddBucketList = require('./add_bucket_list');
const DeleteBucketList = require('./delete_bucket_list')

module.exports = merge(AddBucketList, DeleteBucketList)