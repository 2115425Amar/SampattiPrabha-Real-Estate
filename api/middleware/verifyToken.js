// import jwt from "jsonwebtoken";

// export const verifyToken = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;  // Get token from cookies

//     if (!token) {
//       console.log("No token found in cookies");
//       return res.status(401).json({ message: "Not Authenticated! Token missing" });
//     }

//     // Verify the token and extract the payload
//     const payload = jwt.verify(token, process.env.JWT_SECRET);

//     // Debugging: Check if payload contains the `id`
//     console.log("Token Payload:", payload);

//     if (!payload || !payload.id) {
//       return res.status(403).json({ message: "Token verification failed. Invalid payload." });
//     }

//     req.userId = payload.id;  // Attach userId to request
//     next();  // Proceed to the next middleware/controller
//   } catch (error) {
//     console.error("Error during token verification:", error);
//     res.status(500).json({ message: "Server error during token verification" });
//   }
// };


import JWT from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    console.log("No token found in cookies");
    return res.status(403).json({ message: "Not Authorized" });
  }

  JWT.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      // return res.status(403).json({ message: "Not Authorized" });
      if (err) return res.status(403).json({ message: "Invalid Token" });
    }
    console.log("Token verified. Payload:", payload);
    req.userId = payload.id;
    req.isAdmin = payload.isAdmin;
    next();
  });
};