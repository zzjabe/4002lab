import { randomUUID } from "node:crypto";
import * as repo from "../repositories/employeeRepository";
import { Employee } from "../../../../../../shared/types/employee";

export const getAllEmployees = async () => repo.getEmployees();

export const getEmployees = async (include?: string) => {
  const employees = await repo.getEmployees();

  if (include === "department") {
    return repo.attachDepartments(employees);
  }

  return employees;
};

export const addEmployee = async (
  departmentId: string,
  firstName: string,
  lastName: string,
) => {
  if (firstName.length < 2) throw new Error("First name too short");

  const employee: Employee = {
    id: randomUUID(),
    departmentId,
    firstName,
    lastName,
  };

  return repo.createEmployee(employee);
};

export const editEmployee = async (id: string, data: Partial<Employee>) =>
  repo.updateEmployee(id, data);

export const removeEmployee = async (id: string) => repo.deleteEmployee(id);
