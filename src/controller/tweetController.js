export const getTweets = (req,res,next)=>{

    res.json({
        msg:"tweet router from api v1",
    }) 

}

export const getTweetsById = (req,res)=>{
    return res.json({
        msg:"tweet router from api v1",
        id: req.params.id
    }) 
}


export const createTweet =  (req,res)=>{
    
    return res.json({
        msg:"tweet router from api v1",
        tweet:req.body.name,
        id: req.params.id
    })
}