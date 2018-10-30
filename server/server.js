require("dotenv").config({ path: "../.env" });
const app = require("./app");

const server = app.listen(
  process.env.WORK_STATUS === process.env.DEVELOPMENT ? 4000 : process.env.PORT,
  () => {
    if (process.env.WORK_STATUS === process.env.DEVELOPMENT) {
      console.log("Server active on port 4000");
    } else {
      console.log(`Server active on port ${process.env.PORT}`);
    }
  }
);
