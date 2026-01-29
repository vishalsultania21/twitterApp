import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body:{
        type : string,
        required:true,
        trim : true,
        maxLength:280,
    }
})

const Tweet = mongoose.model("tweet" , tweetSchema);