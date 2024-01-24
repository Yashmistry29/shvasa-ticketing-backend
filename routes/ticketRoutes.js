const router = require("express").Router();

const createSupportTicket = require('../controllers/supportTicketController').createTicket;
const createMultipleTickets = require('../controllers/supportTicketController').createMultipleTickets;
const assignAgent = require('../controllers/supportTicketController').assignAgent;
const resolveTicket = require('../controllers/supportTicketController').resolveTicket;
const reOpenTicket = require('../controllers/supportTicketController').reOpenTicket;
const getAllTickets = require('../controllers/supportTicketController').getAllTickets;
const openTickets = require('../controllers/supportTicketController').getAllOpenTickets;
const getAllTicketsById = require('../controllers/supportTicketController').getAllTicketsById;
const TicketsAssignedToAgent = require('../controllers/supportTicketController').TicketsAssignedToAgent;
const TicketsResolvedByAgent = require('../controllers/supportTicketController').TicketsResolvedByAgent;

router.post("/createTicket", createSupportTicket)
router.post("/multipleTickets", createMultipleTickets)
router.post("/assignTicket", assignAgent)
router.post("/resolveTicket", resolveTicket)
router.post("/reOpenTicket", reOpenTicket)
router.post("/getAllTickets", getAllTickets)
router.post("/openTickets", openTickets)
router.post("/getAllTicketsById", getAllTicketsById)
router.post("/assignedToAgent", TicketsAssignedToAgent)
router.post("/resolvedByAgent", TicketsResolvedByAgent)

module.exports = router;