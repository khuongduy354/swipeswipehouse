import { Request } from "express";

export const extractToken = (req: Request) => {
  let token = req.header("Authorization");
  if (!token) return undefined;

  // Bearer check
  if (!token.startsWith("Bearer ")) return undefined;
  token = token.split(" ")[1]; // strip bearer

  return token;
};
