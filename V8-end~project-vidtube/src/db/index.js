import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

let connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB Connected Successfully with ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`DB Connection Fail. ${error}`);
    process.exit(1);
  }
};

export { connectDB };
