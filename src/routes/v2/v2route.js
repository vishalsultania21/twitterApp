import express, { Route } from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comments.js";


const v2Router = express.Router();

v2Router.use('/tweets',tweetRouter);
v2Router.use('/comments',commentRouter);

export default v2Router;