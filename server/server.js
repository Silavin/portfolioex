require("dotenv").config();
const app = require("./app");

const server = app.listen(
  process.env.WORK_STATUS === process.env.DEVELOPMENT ? 4000 : process.env.PORT
);
