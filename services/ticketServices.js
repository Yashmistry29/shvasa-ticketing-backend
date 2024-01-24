const mongoose = require("mongoose");
const Tickets = require('../models/ticketModel');
const Agent = require("../models/agentModel");
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
        type: body.type,
        status: "New",
        assignedTo:"",
        resolvedOn: new Date()
      }

      console.log(data);
      var resp = await Tickets.create(data);
      return { success: true, message: 'Ticket Created Successfully', data: resp._id }
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  createMultipleTickets = async (body) => {
    try {
      var tickets = body.Tickets;
      tickets.map((data) => {
        data['_id'] = new ObjectId();
        data['status'] = 'New';
        data['assignedTo'] = '';
        data['dateCreated'] = new Date();
        data['resolvedOn'] = new Date();
      })

      console.log(tickets)

      var resp = await Tickets.insertMany(tickets)
      return { success: true, message: 'Document Inserted successfully', data: tickets.length }
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
      var update = await Tickets.updateOne({ _id: id }, {
        $set: {
          status: "Resolved",
          resolvedOn: new Date().toISOString()
        }
      })
      console.log(update)
      var resp = await Tickets.findOne({ _id: id });
      return { success: true, message: 'Ticket Resolved', data: resp }
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  reOpenTicket = async (body) => {
    try {
      var id = new ObjectId(body._id);
      var update = await Tickets.updateOne({ _id: id }, {
        $set: {
          status: "Waiting",
        }
      })
      console.log(update)
      var resp = await Tickets.findOne({ _id: id });
      console.log(resp)
      return { success: true, message: 'Ticket Re-opened', data: resp }
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

  getAllOpenTickets = async () => {
    try {
      var resp = await Tickets.find({ status: { "$ne": "Resolved" } });
      console.log(resp)
      return { success: true, message: 'Tickets Fetched Successfully', data: resp };
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  getAllTicketsById = async (body) => {
    try {
      var arr = body.tickets;
      var ids = [];
      arr.map((ticket) => {
        var id = new ObjectId(ticket);
        ids.push(id);
      })
      var resp = await Tickets.find({ "_id": { "$in": ids } });
      console.log(resp);
      // var resp = await Tickets.find({});
      // console.log(resp)
      return { success: true, message: 'Tickets Fetched Successfully', data: resp };
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  TicketsAssignedToAgent = async (body) => {
    try {
      var id = new ObjectId(body._id);
      var agent = await Agent.findOne({ _id: id });
      var resp = await Tickets.find({ assignedTo: agent.email, status: "Assigned" });
      console.log(resp.length);
      // var resp = await Tickets.find({});
      // console.log(resp)
      return { success: true, message: 'Assigned Tickets Fetched Successfully', data: resp };
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  TicketsResolvedByAgent = async (body) => {
    try {
      var id = new ObjectId(body._id);
      var agent = await Agent.findOne({ _id: id });
      var query = { "assignedTo": agent.email, "status": "Resolved" }
      var resp = await Tickets.find(query);
      console.log(resp.length);
      // var resp = await Tickets.find({});
      // console.log(resp)
      return { success: true, message: 'Resolved Tickets Fetched Successfully', data: resp };
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }
}

module.exports = exports = new ticket();
