import mongoose from "mongoose";

import { MONGODB_URL } from "./serverconfig.js";

export default async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("connected to db");
    } catch (error) {
        console.log("failed to connect to DB");
        console.log(error);
    }
}
