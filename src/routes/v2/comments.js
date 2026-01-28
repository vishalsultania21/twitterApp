import express, { Route } from "express";


const commentRouter = express.Router();

commentRouter.get('/',(req,res)=>{
    res.json({
        msg:"comment router from api v2",
    }) 
});

commentRouter.get('/:id',(req,res)=>{
    return res.json({
        msg:"comment router from api v2",
        id: req.params.id
    }) 
});
export default commentRouter;