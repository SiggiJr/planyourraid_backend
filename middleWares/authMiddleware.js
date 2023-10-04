import { createHmac } from "crypto";
import { verifyToken } from "../utils/token.js";

export const encrypt = (req, res, next) => {
  const hmac = createHmac("sha256", req.body.password);
  req.body.password = hmac.digest("hex");
  next();
};

export const checkToken = (req, res, next) => {
  const token = req.get("authorization").split(" ")[1];
  console.log(token);
  if (token === "null") return res.status(403).end();
  try {
    const payload = verifyToken(token);
    req.payload = payload;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).end();
  }
};
