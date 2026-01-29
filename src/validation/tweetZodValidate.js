export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      console.log("--> Validator Started: checking body...");
      schema.parse(req.body);
      
      console.log("--> Validation Passed! Moving to controller...");
      next();
    } catch (error) {
     
        return res.status(400).json({
          error: error.issues,
          message: "Validation failed",
          success: false,
       
        });
    

      // 2. If it's NOT a Zod error, log the crash
      console.log("--> CRASH DETECTED:", error);

      return res.status(500).json({
        error: "Internal Server Error",
        message: "Something went wrong", 
        success: false,
      });
    }
  };
};