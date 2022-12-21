const mongoose = require("mongoose");
const config = require("./config");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(config.mongoUri, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};
