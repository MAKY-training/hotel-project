import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjhlY2Q5NmI4MDJjZmY3NTk0NTc3YiIsImlhdCI6MTc2MTE1NTM4MSwiZXhwIjoxNzYxNzYwMTgxfQ.zIL9Bdzj2RboUC1xu4DRA8KIEFrT9qL59uRZYG_X2A8
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjkxOTg1ZTIyZWY1NWM0ZGVlZDlmZiIsImlhdCI6MTc2MTE1NTU3MywiZXhwIjoxNzYxNzYwMzczfQ.Kf6J2reuhjfxhMUgauJXumYOeOHGfEIlbXPqTvISIT8
