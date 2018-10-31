require("dotenv").config();
const app = require("./app");

//eslint-disable-next-line
const server = app.listen(
  process.env.WORK_STATUS === process.env.DEVELOPMENT ? 4000 : process.env.PORT,
  () => {
    if (process.env.WORK_STATUS === process.env.DEVELOPMENT) {
      //eslint-disable-next-line
      console.log("Server active on port 4000");
    } else {
      //eslint-disable-next-line
      console.log(`Server active on port ${process.env.PORT}`);
    }
  }
);
