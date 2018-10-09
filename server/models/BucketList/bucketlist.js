const mongoose = require('mongoose');

const BucketSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  dateCreated: {type: Date, default: Date.now()},
  ownerId: {type: String, required: true},
  hearts: {type: Number, default: 0},
  userIds: {type: [Number]}
})

module.exports = mongoose.model('BucketList', BucketSchema);