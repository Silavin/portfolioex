const mongoose = require("mongoose");
const mockMongoDB = require("mongodb-memory-server").default;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;

const setUpServer = async () => {
  mongoServer = new mockMongoDB();
  const mongoURI = await mongoServer.getConnectionString();
  const fakeDBEstablished = () => {
    //eslint-disable-next-line
    console.log("The mock database has been setup");
  };
  const errorHandler = err => {
    //eslint-disable-next-line
    console.log("Error has occured within the database:\n" + err);
  };
  await mongoose
    .connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    )
    .then(fakeDBEstablished, errorHandler);
};

const tearDown = () => {
  mongoose.disconnect();
  mongoServer.stop();
};

module.exports = {
  setUpServer,
  tearDown
};
