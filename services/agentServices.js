const mongoose = require("mongoose");
const Agent = require('../models/agentModel');
const ObjectId = require('mongodb').ObjectId;
const md5 = require("md5");

const db = mongoose.connection;

class Agents {
  AgentLogin = async (body) => {
    try {
      var query = { email: body.email };
      console.log(body)
      let resp = await Agent.findOne(query);
      console.log(resp);
      // console.log(resp.password);


      if (resp != null) {
        if (md5(body.password) === resp.password) {
          return { success: true, message: 'Login Successful', data: resp._id };
        } else {
          return { success: false, message: 'Invalid Username or password.' };
        }
      } else {
        return {
          status: false,
          message: 'User not found'
        };
      }
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  createAgent = async (body) => {
    try {
      const data = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        description: body.description,
        password: md5(body.password),
        active: true,
        dateCreated: new Date().toISOString()
      }

      var resp = await Agent.create(data);
      console.log(resp)
      return { success: true, message: 'Agent Created Successfully', data: data}
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }

  getAgentById = async (body) => {
    try {
      var id = new ObjectId(body._id);
      var resp = await Agent.findOne({ _id: id });
      console.log(resp)
      return { success: true, message: 'Agent Fetched Successfully', data: resp }
    }
    catch (err) {
      return { success: false, message: err.message };
    }
  }
}

module.exports = exports = new Agents();
