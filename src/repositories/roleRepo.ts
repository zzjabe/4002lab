import type { Role } from "../types/role";
import roles from "../data/roles";

const roleReop = {
  getAll: async (): Promise<Role[]> => {
    return Promise.resolve(roles);
  },
  create: async (department: Role) => {
    roles.push(department);
    return Promise.resolve(roles);
  },
};

export default roleReop;
