// const path = require("path");
// require("dotenv").config({ path: path.resolve(".env") });

const config = require("../config");

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 0,
  upperCase: 0,
  numeric: 1,
  symbol: 0,
  requirementCount: 2,
};

userSchema.methods.generateAuthToken = function () {
  console.log("JWT", config.jwtPrivateKey);
  const token = jwt.sign({ _id: this._id }, config.jwtPrivateKey, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity(complexityOptions)
      .required()
      .label("Password"),
    confirmPassword: passwordComplexity(complexityOptions)
      .required()
      .label("Confirm Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
