const mongoose = require("mongoose");
const app = require("./api/api.js");

const config = require("./config");

const boot = async () => {
  console.log(config.mongoUri);
  // Connect to mongodb
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};

boot();
// eslint-disable-next-line no-unused-expressions
console;
