import express, { Route } from "express";
import { createTweet, getTweets, getTweetsById } from "../../controller/tweetController.js";
import { tweetManualValidate } from "../../validation/tweetManualValidate.js";


const tweetRouter = express.Router();

tweetRouter.get('/',getTweets);

tweetRouter.get('/:id',getTweetsById);

tweetRouter.post('/',tweetManualValidate,createTweet);

export default tweetRouter;