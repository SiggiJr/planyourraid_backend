import jwt from "jsonwebtoken";

export function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5min" });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
