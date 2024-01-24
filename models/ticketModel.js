const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  topic: String,
  description: String,
  dateCreated: Date,
  severity: String,
  type: String,
  assignedTo: String, // Support Agent ID
  status: String, // New, Assigned, Resolved
  resolvedOn: Date
}, { versionKey: false })

module.exports = mongoose.model('Ticket', ticketSchema, 'Ticket');