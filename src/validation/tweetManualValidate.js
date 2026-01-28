export const tweetManualValidate = (req, res, next) => {
  try {
    if(!Object.keys.name){
      throw new Error("send valid key");
    }
    if(req.body.name.length > 20 || req.body.name.length < 5) {
      throw new Error("invalid input");
    }
    next();
  } 
  catch(err) {
    console.log(err);
    return res.status(400).json({
      msg: err.message,
    });
  }
};
