const ticketServices = require('../services/ticketServices');

const createTicket = async (req, res, next) => {
  try {
    const resp = await ticketServices.createTicket(req.body);
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

const createMultipleTickets = async (req, res, next) => {
  try {
    const resp = await ticketServices.createMultipleTickets(req.body);
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

const assignAgent = async (req, res, next) => {
  try {
    const resp = await ticketServices.assignAgent(req.body);
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

const resolveTicket = async (req, res, next) => {
  try {
    const resp = await ticketServices.resolveTicket(req.body);
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

const reOpenTicket = async (req, res, next) => {
  try {
    const resp = await ticketServices.reOpenTicket(req.body);
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

const getAllTickets = async (req, res, next) => {
  try {
    const resp = await ticketServices.getAllTickets();
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

const getAllOpenTickets = async (req, res, next) => {
  try {
    const resp = await ticketServices.getAllOpenTickets();
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

const getAllTicketsById = async (req, res, next) => {
  try {
    const resp = await ticketServices.getAllTicketsById(req.body);
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

const TicketsAssignedToAgent = async (req, res, next) => {
  try {
    const resp = await ticketServices.TicketsAssignedToAgent(req.body);
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

const TicketsResolvedByAgent = async (req, res, next) => {
  try {
    const resp = await ticketServices.TicketsResolvedByAgent(req.body);
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
  createTicket,
  createMultipleTickets,
  assignAgent,
  resolveTicket,
  reOpenTicket,
  getAllTickets,
  getAllOpenTickets,
  getAllTicketsById,
  TicketsAssignedToAgent,
  TicketsResolvedByAgent
}