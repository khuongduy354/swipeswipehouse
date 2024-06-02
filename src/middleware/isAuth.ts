import { NextFunction, Request, Response } from "express";
import { supabase } from "../helper/supabase";
import { extractToken } from "../helper/extractToken";

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = extractToken(req);
    if (!token)
      return res
        .status(401)
        .json({ message: "No token found or invalid format" });

    // validate
    const {
      data: { user },
    } = await supabase.auth.getUser(token);
    if (!user) return res.status(401).json({ message: "Invalid token" });

    // TODO: populate user from postgres here, if not return error

    req.user = { email: user.email || "", id: user.id };
    next();
  } catch (err) {
    throw err;
  }
};
