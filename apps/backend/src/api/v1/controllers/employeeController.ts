import type { IdParams } from "../types/express";
import { Request, Response } from "express";
import * as service from "../services/employeeService";

export const getEmployees = async (req: Request, res: Response) => {
  const include = req.query.include as string | undefined;

  const data = await service.getEmployees(include);

  res.json(data);
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { departmentId, firstName, lastName } = req.body;

    const employee = await service.addEmployee(
      departmentId,
      firstName,
      lastName,
    );

    res.status(201).json(employee);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateEmployee = async (req: Request<IdParams>, res: Response) => {
  const employee = await service.editEmployee(req.params.id, req.body);

  if (!employee) return res.status(404).send();

  res.json(employee);
};

export const deleteEmployee = async (req: Request<IdParams>, res: Response) => {
  const ok = await service.removeEmployee(req.params.id);

  if (!ok) return res.status(404).send();

  res.status(204).send();
};
