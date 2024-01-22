const agentServices = require('../services/agentServices');

const createAgent = async (req, res, next) => {
  try {
    const resp = await agentServices.createAgent(req.body);
    if (resp.success == true) {
      res.send({ success: true, message: resp.message, data: resp.data });
    }
    else {
      res.send({ success: false, message: resp.message });
    }

  } catch (err) {
    res.send({ success: false, message: err.message });
  }
}

module.exports = {
  createAgent
}