const mongoose = require("mongoose");
const Agent = require('../models/agentModel');

const db = mongoose.connection;

class Agents {
  createAgent = async (body) => {
    try {
      const data = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        description: body.description,
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
}

module.exports = exports = new Agents();
