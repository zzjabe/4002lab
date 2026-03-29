import * as departmentRepo from "../repositories/departmentRepository";

export const getAllDepartments = async () => {
  return departmentRepo.getDepartments();
};

export const getDepartment = async (id: string) => {
  return departmentRepo.getDepartmentById(id);
};

export const addDepartment = async (name: string) => {
  if (!name || name.trim().length < 2) {
    throw new Error("Department name must be at least 2 characters");
  }

  return departmentRepo.createDepartment({ name });
};

export const editDepartment = async (id: string, name: string) => {
  if (!name || name.trim().length < 2) {
    throw new Error("Department name too short");
  }

  return departmentRepo.updateDepartment(id, name);
};

export const removeDepartment = async (id: string) => {
  return departmentRepo.deleteDepartment(id);
};
