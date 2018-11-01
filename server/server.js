require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const isInProduction = process.env.WORK_STATUS === "production";
if (isInProduction === false) {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );
}
mongoose.connection.on("connected", function() {
  //eslint-disable-next-line
  console.log("Mongoose default connection open to " + process.env.MONGODB_URI);
});
mongoose.connection.on("error", function(err) {
  //eslint-disable-next-line
  console.log("Mongoose default connection error: " + err);
});
mongoose.connection.on("disconnected", function() {
  //eslint-disable-next-line
  console.log("Mongoose default connection disconnected");
});

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
