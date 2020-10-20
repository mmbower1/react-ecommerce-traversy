const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected to: ${conn.connection.host}`.green.bold);
  } catch (err) {
    console.error(`Mongo error ${err.message}`.red.underline.bold);
    process.exit(1);
  }
}

module.exports = connectDB;
