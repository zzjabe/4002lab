import { Request, Response } from "express";
import type { IdParams } from "../types/express";
import * as departmentService from "../services/departmentService";

export const getDepartments = async (req: Request, res: Response) => {
  const data = await departmentService.getAllDepartments();

  res.json(data);
};

export const getDepartment = async (req: Request<IdParams>, res: Response) => {
  const dept = await departmentService.getDepartment(req.params.id);

  if (!dept) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.json(dept);
};

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const dept = await departmentService.addDepartment(req.body.name);

    res.status(201).json(dept);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateDepartment = async (
  req: Request<IdParams>,
  res: Response,
) => {
  const dept = await departmentService.editDepartment(
    req.params.id,
    req.body.name,
  );

  if (!dept) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.json(dept);
};

export const deleteDepartment = async (
  req: Request<IdParams>,
  res: Response,
) => {
  const ok = await departmentService.removeDepartment(req.params.id);

  if (!ok) {
    return res.status(404).json({ message: "Department not found" });
  }

  res.status(204).send();
};
