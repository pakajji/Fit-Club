const path = require("path");
require("dotenv").config({ path: path.resolve(".env") });

module.exports = {
  isVercel: process.env.IS_VERCEL || false,
  port: process.env.BACKEND_PORT || 3001,
  mongoUri: process.env.MONGO_URI,
  mongoOptions: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DATABASE,
    retryWrites: true,
    w: "majority",
  },
};
