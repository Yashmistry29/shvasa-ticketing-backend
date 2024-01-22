const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
  active: Boolean,
  dateCreated: Date
}, { versionKey: false })

module.exports = mongoose.model('Agent', agentSchema, "Agent");