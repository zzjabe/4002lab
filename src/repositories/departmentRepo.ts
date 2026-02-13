import departments from "../data/departments";
import type { Department } from "../types/department";

const employeeRepo = {
  getAll: async (): Promise<Department[]> => {
    return Promise.resolve(departments);
  },
  create: async (department: Department) => {
    departments.push(department);
    return Promise.resolve(departments);
  },
};

export default employeeRepo;
