import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export function requireUser(req: Request, res: Response, next: NextFunction) {
  const auth = getAuth(req);

  if (!auth.userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  (req as any).userId = auth.userId;
  (req as any).orgId = auth.orgId;
  (req as any).orgRole = auth.orgRole;

  next();
}
