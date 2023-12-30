const mongoose = require("mongoose");


const { MONGO_URI } = process.env;


const connectDb = async () => {
  try {
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/my_contact_backend');
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
