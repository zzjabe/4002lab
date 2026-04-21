import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export function requireRole(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const auth = getAuth(req);
    const role = auth.orgRole?.replace("org:", "");

    if (role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
}
