import departments from "../data/departments";

const departmentRepo = {
  getAll: async () => Promise.resolve(departments),

  addEmployee: async (deptName: string, employee: any) => {
    const dept = departments.find((d) => d.name === deptName);

    if (!dept) throw new Error("Department not found");

    dept.employees.push(employee);

    return Promise.resolve(dept.employees);
  },
};

export default departmentRepo;
