import * as repo from "../repositories/employeeRepository";

export const getEmployees = async (include?: string) => {
  if (include === "department") {
    return repo.getEmployees();
  }

  return repo.getEmployees();
};

export const getEmployeeById = async (id: string) => {
  return repo.getEmployeeById(id);
};

export const addEmployee = async (
  departmentId: string,
  firstName: string,
  lastName: string,
) => {
  if (!firstName || firstName.length < 2) {
    throw new Error("First name too short");
  }

  if (!lastName || lastName.length < 2) {
    throw new Error("Last name too short");
  }

  return repo.createEmployee({
    firstName,
    lastName,
    department: {
      connect: { id: departmentId },
    },
  });
};

export const editEmployee = async (
  id: string,
  data: {
    firstName?: string;
    lastName?: string;
    departmentId?: string;
  },
) => {
  return repo.updateEmployee(id, data);
};

export const removeEmployee = async (id: string) => {
  return repo.deleteEmployee(id);
};
