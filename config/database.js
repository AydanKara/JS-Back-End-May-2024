const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/softuni-booking";

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to Mongoose");
    console.log(error.message);
    process.exit(1);
  }
};
