const dotenv = require("dotenv");

dotenv.config();

const { PORT,CURRENTSERVER } = process.env;

module.exports = {
  port: PORT,
  server: CURRENTSERVER,
};
