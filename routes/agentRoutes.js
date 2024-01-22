const router = require("express").Router();

const createSupportAgents = require('../controllers/supportAgentController').createAgent;

router.post("/createAgent", createSupportAgents)

module.exports = router;