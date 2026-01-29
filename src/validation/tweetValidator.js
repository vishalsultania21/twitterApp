import * as z from "zod";

export const tweetSchema = z.object({
    name : z.string().min(1).max(240), 
});