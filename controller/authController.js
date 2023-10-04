import { getDb } from "../utils/db.js";
import { createToken } from "../utils/token.js";

const COL = "user";

export const login = async (req, res) => {
  const db = await getDb();
  const result = await db.collection(COL).findOne(req.body);
  // console.log(result);
  if (!result) {
    res.status(403).end();
  } else {
    const token = createToken({ id: result._id });
    res.json({ token });
  }
};

export const register = async (req, res) => {
  const db = await getDb();
  const result = await db.collection(COL).insertOne(req.body);
  console.log(result);
  res.end();
};
