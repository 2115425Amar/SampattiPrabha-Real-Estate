import JWT from "jsonwebtoken";
//mport userModel from "../models/userModel.js";

//Protected Routes token base

export const verifyToken = async (req, res, next) => {
  try {
    // const token = JWT.verify(
    //   req.headers.authorization,
    //   process.env.JWT_SECRET
    // );

    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not Authenticated!" });
    
     JWT.verify(token , process.env.JWT_SECRET,async(err, payload)=>{
        if(err){
            return res.status(403).json({message : "Token is not valid"});
        }
        req.uesrId = payload.id;
            next();
      });

  } catch (error) {
    console.log(error);
  }
};

