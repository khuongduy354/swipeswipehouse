import { Router } from "express";
import { extractToken } from "../helper/extractToken";

export const AuthRoute = Router();

AuthRoute.post("/signup", (req, res) => {
  //get token
  const token = extractToken(req);
  if (!token)
    return res
      .status(401)
      .json({ message: "No token found or invalid format" });

  // validate

  // init postgres and get user

  // return
});
