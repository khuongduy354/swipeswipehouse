// express.d.ts
import { Request } from "express";

// Extend the Express Request interface
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      email: string;
      // Add any additional fields you need
    };
  }
}
