require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const isInProduction = process.env.NODE_ENV === "production";
if (isInProduction) {
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
const server = app.listen(process.env.PORT || 4000, () => {
  //eslint-disable-next-line
  console.log(`Server active on port ${process.env.PORT || 4000}`);
});
