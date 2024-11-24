import mongoose, { connect } from 'mongoose';
import * as dotenv from 'dotenv';

// Load environmental variables from .env file
dotenv.config();

const connectDB = async() => {

  try{    
    // ensure environmental variable is defined
    if (!process.env.MONGO_URI){
      throw new Error('Mongo uri is not defined in the environmental variable');
    }

    // connect to the database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('connection is succesfully established!');
  }catch(error){
    console.error("Database connection failed", error);
    process.exit(1)
  }
}


export default connectDB;