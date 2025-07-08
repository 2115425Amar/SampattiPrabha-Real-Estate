import JWT from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    // console.log("No token found in cookies");
    return res.status(403).json({ message: "Not Authorized" });
  }

  JWT.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      // console.log("Token verification failed:", err.message);
      // return res.status(403).json({ message: "Not Authorized" });
      if (err) return res.status(403).json({ message: "Invalid Token" });
    }
    // console.log("Token verified. Payload:", payload);
    req.userId = payload.id;
    req.isAdmin = payload.isAdmin;
    next();
  });
};