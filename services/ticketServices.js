const mongoose = require("mongoose");
const Tickets = require('../models/ticketModel');
const ObjectId = require('mongodb').ObjectId; 

const db = mongoose.connection;

class ticket {
  createTicket = async (body) => {
    try {
      const data = {
        topic: body.topic,
        description: body.description,
        dateCreated: new Date(),
        severity: body.severity,
        status: "New",
        assignedTo:"",
        resolvedOn: new Date()
      }

      var resp = await Tickets.create(data);
      console.log(resp)
      return { success: true, message: 'Ticket Created Successfully', data: resp._id }
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  assignAgent = async (body) => {
    try {
      var id = new ObjectId(body._id);
      console.log(id)
      var resp = await Tickets.updateOne({ _id: id}, {
        $set: {
          assignedTo: body.assignedTo,
          status:"Assigned"
        }
      })
      console.log(resp)
      return { success: true, message: 'Ticket Assigned' }
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  resolveTicket = async (body) => {
    try {
      var id = new ObjectId(body._id);
      var resp = await Tickets.updateOne({ _id: id }, {
        $set: {
          status: "Resolved",
          resolvedOn: new Date().toISOString()
        }
      })
      console.log(resp)
      return { success: true, message: 'Ticket Resolved'}
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  getAllTickets = async () => {
    try {
      var resp = await Tickets.find({});
      console.log(resp)
      return { success: true, message: 'Tickets Fetched Successfully', data: resp };
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }
}

module.exports = exports = new ticket();
