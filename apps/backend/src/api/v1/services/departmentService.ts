import { randomUUID } from "node:crypto";

import * as departmentRepo from "../repositories/departmentRepository";

import type { Department } from "../../../../../../shared/types/department";

export const getAllDepartments = async (): Promise<Department[]> => {
  return departmentRepo.getDepartments();
};

export const getDepartment = async (
  id: string,
): Promise<Department | undefined> => {
  return departmentRepo.getDepartmentById(id);
};

export const addDepartment = async (name: string): Promise<Department> => {
  if (!name || name.trim().length < 2) {
    throw new Error("Department name must be at least 2 characters");
  }

  const department: Department = {
    id: randomUUID(),
    name,
  };

  return departmentRepo.createDepartment(department);
};

export const editDepartment = async (
  id: string,
  name: string,
): Promise<Department | null> => {
  return departmentRepo.updateDepartment(id, name);
};

export const removeDepartment = async (id: string): Promise<boolean> => {
  return departmentRepo.deleteDepartment(id);
};
