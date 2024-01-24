const router = require("express").Router();

const createSupportAgents = require('../controllers/supportAgentController').createAgent;
const AgentLogin = require('../controllers/supportAgentController').AgentLogin;
const getAgentById = require('../controllers/supportAgentController').getAgentById;

router.post("/createAgent", createSupportAgents)
router.post("/agentLogin", AgentLogin)
router.post("/agentById", getAgentById)

module.exports = router;