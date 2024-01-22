const express = require("express");

//Database
require("./database/database");

const config = require("./config");
const app = express();

// CORS
var cors = require("cors");
app.use(cors());

//Routes:
const homepage = require("./routes/index");
const agentRoutes = require("./routes/agentRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const res = require("express/lib/response");

const PORT = config.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/", homepage);
app.use("/api/support-agents", agentRoutes);
app.use("/api/support-tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});