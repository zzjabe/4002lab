import { employees } from "../../../data/employees";
import { departments } from "../../../data/departments";
import { Employee } from "../../../../../../shared/types/employee";

export const getEmployees = async () => employees;

export const getEmployeeById = async (id: string) =>
  employees.find((e) => e.id === id);

export const createEmployee = async (employee: Employee) => {
  employees.push(employee);
  return employee;
};

export const updateEmployee = async (id: string, data: Partial<Employee>) => {
  const emp = employees.find((e) => e.id === id);

  if (!emp) return null;

  Object.assign(emp, data);

  return emp;
};

export const deleteEmployee = async (id: string) => {
  const index = employees.findIndex((e) => e.id === id);

  if (index === -1) return false;

  employees.splice(index, 1);

  return true;
};

export const attachDepartments = async (emps: Employee[]) => {
  return emps.map((emp) => {
    const dept = departments.find((d) => d.id === emp.departmentId);

    return {
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      department: dept ?? null,
    };
  });
};
