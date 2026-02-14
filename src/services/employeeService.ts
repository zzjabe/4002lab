import employeeRepo from "../repositories/departmentRepo";

const employeeService = {
  async getAll() {
    return employeeRepo.getAll();
  },

  async addEmployee(deptName: string, firstName: string, lastName: string) {
    if (!deptName) {
      throw new Error("Department does not exist");
    }

    if (firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    return employeeRepo.addEmployee(deptName, {
      firstName,
      lastName,
    });
  },
};

export default employeeService;
