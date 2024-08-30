import JWT from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
      console.log(req.userId);
      res.status(200).json({message:"You are Authenticated"});
};


//admin acceess
export const shouldBeAdmin = async (req, res) => {
  try {
  
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated!" });
    
     JWT.verify(token, process.env.JWT_SECRET,async(err, payload)=>{
        if(err){
            return res.status(403).json({message : "Token is not valid"});
            //req.uesrId = payload.id;
        }
        if(!payload.isAdmin){
          return res.status(403).json({message : "Not Authorized"});
        }
      });
      res.status(200).json({message:"You are Authenticated and you are Admin"});

  } catch (error) {
    console.log(error);
  }
};