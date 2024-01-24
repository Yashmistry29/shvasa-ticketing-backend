const agents = require("../models/agentModel");
const tickets = require("../models/ticketModel");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  var message = {
    success: true,
    message: "Welcome to the Shvasa Backend",
  };
  res.send(message);
});

router.post("/api/round-robin/cron", async (req, res, next) => {
  var activeAgents = await agents.find({ active: true });
  // console.log(activeAgents);

  var updateTicketStatus = await tickets.updateMany({ status: { "$in": ["Assigned", "Waiting"] } }, {
    $set: {
      status: "Waiting",
      assignedTo: "",
    }
  });
  console.log(updateTicketStatus);

  var newTickets = await tickets.find({ status: "New" });
  var waitingTickets = await tickets.find({ status: "Waiting" });
  // console.log(newTickets.length, waitingTickets.length)

  var unassignedTickets = [...newTickets, ...waitingTickets];

  console.log(unassignedTickets.length)

  const totalAgents = activeAgents.length;

  for (let i = 0; i < totalAgents; i++) {
    var agent = activeAgents[i % totalAgents];
    // var ticket = unassignedTickets[i];

    console.log(agent.name, unassignedTickets[i].topic);
    var ticketUpdate = await tickets.updateOne({ _id: unassignedTickets[i]._id }, {
      $set: {
        status: "Assigned",
        assignedTo: agent.email,
      }
    })

    console.log(ticketUpdate);
  }

  res.send({
    success: true,
    massage: "Tickets assigned"
  })
})

module.exports = router;