import { departments } from "../../../data/departments";
import type { Department } from "../../../../../../shared/types/department";

export const getDepartments = async (): Promise<Department[]> => {
  return departments;
};

export const getDepartmentById = async (
  id: string,
): Promise<Department | undefined> => {
  return departments.find((d) => d.id === id);
};

export const createDepartment = async (
  department: Department,
): Promise<Department> => {
  departments.push(department);
  return department;
};

export const updateDepartment = async (
  id: string,
  name: string,
): Promise<Department | null> => {
  const dept = departments.find((d) => d.id === id);

  if (!dept) return null;

  dept.name = name;

  return dept;
};

export const deleteDepartment = async (id: string): Promise<boolean> => {
  const index = departments.findIndex((d) => d.id === id);

  if (index === -1) return false;

  departments.splice(index, 1);

  return true;
};
