import roles from "../../../data/roles";
import type { Role } from "../../../../../../shared/types/role";

export const getRoles = async () => roles;

export const getRoleById = async (id: string) => roles.find((r) => r.id === id);

export const createRole = async (role: Role) => {
  roles.push(role);
  return role;
};

export const deleteRole = async (id: string) => {
  const index = roles.findIndex((r) => r.id === id);

  if (index === -1) return false;

  roles.splice(index, 1);

  return true;
};
