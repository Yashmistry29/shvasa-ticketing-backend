const router = require("express").Router();

const createSupportTicket = require('../controllers/supportTicketController').createTicket;
const assignAgent = require('../controllers/supportTicketController').assignAgent;
const resolveTicket = require('../controllers/supportTicketController').resolveTicket;
const getAllTickets = require('../controllers/supportTicketController').getAllTickets;

router.post("/createTicket", createSupportTicket)
router.post("/assignTicket", assignAgent)
router.post("/resolveTicket", resolveTicket)
router.post("/getAllTickets", getAllTickets)

module.exports = router;