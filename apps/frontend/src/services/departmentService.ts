import departmentRepo from "../repositories/departmentRepo";

const departmentService = {
  async getAll() {
    return departmentRepo.getDepartments();
  },
};

export default departmentService;
