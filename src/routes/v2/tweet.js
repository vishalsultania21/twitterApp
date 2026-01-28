import express, { Route } from "express";


const tweetRouter = express.Router();

tweetRouter.get('/',(req,res)=>{
    res.json({
        msg:"tweet router from api v2",
    }) 
});

tweetRouter.get('/:id',(req,res)=>{
    return res.json({
        msg:"tweet router from api v2",
        id: req.params.id
    }) 
});
export default tweetRouter;