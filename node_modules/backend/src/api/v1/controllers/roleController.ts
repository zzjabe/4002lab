import { Request, Response } from "express";
import * as service from "../services/roleService";
import type { IdParams } from "../types/express";

export const getRoles = async (req: Request, res: Response) => {
  const roles = await service.getAllRoles();
  res.json(roles);
};

export const createRole = async (req: Request, res: Response) => {
  try {
    const { title, name } = req.body;

    const role = await service.addRole(title, name);

    res.status(201).json(role);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteRole = async (req: Request<IdParams>, res: Response) => {
  const ok = await service.removeRole(req.params.id);

  if (!ok) return res.status(404).send();

  res.status(204).send();
};
