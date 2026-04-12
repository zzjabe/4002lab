import * as repo from "../repositories/employeeRepo";

export const getAllEmployees = async () => repo.getEmployees();

export const addEmployee = async (
  token: string,
  departmentId: string,
  firstName: string,
  lastName: string,
) => {
  if (!departmentId) throw new Error("Department required");

  return repo.addEmployee(token, departmentId, firstName, lastName);
};
