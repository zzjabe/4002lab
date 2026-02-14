import type { Role } from "../types/role";
import roles from "../data/roles";

const roleReop = {
  getAll(): Role[] {
    return roles;
  },

  add(role: Role): void {
    roles.push(role);
  },

  delete(name: string): void {
    const index = roles.findIndex((r) => r.name === name);
    if (index !== -1) {
      roles.splice(index, 1);
    }
  },

  exists(name: string): boolean {
    return roles.some((r) => r.name === name);
  },

  update(name: string, updated: Partial<Role>): void {
    const role = roles.find((r) => r.name === name);
    if (role) {
      Object.assign(role, updated);
    }
  },
};

export default roleReop;
