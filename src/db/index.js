import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log((`${process.env.MONGO_DB_URL}/${DB_NAME}`));
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
        console.log(`Moongo_DB connected | Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGO_DB CONECTION ERROR ", error);
        process.exit(1)
    }
}

export default connectDB;