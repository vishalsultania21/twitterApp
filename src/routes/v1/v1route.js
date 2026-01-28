import express, { Route } from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comments.js";


const v1Router = express.Router();

v1Router.use('/tweets',tweetRouter);
v1Router.use('/comments',commentRouter);

export default v1Router;