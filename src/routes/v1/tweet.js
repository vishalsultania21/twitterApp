import express, { Route } from "express";
import { createTweet, getTweets, getTweetsById } from "../../controller/tweetController.js";
// import { tweetManualValidate } from "../../validation/tweetManualValidate.js";
import {validate} from "../../validation/tweetZodValidate.js";
import { tweetSchema } from "../../validation/tweetValidator.js";


const tweetRouter = express.Router();

tweetRouter.get('/',getTweets);

tweetRouter.get('/:id',getTweetsById);

tweetRouter.post('/',validate(tweetSchema),createTweet);

export default tweetRouter;