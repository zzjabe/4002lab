export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  departmentId: string;
};

export type EmployeeWithDepartment = {
  id: string;
  firstName: string;
  lastName: string;
  department: {
    id: string;
    name: string;
  } | null;
};
