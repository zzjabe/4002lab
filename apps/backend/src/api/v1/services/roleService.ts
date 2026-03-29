import * as repo from "../repositories/roleRepository";

export const getAllRoles = async () => {
  return repo.getRoles();
};

export const getRoleById = async (id: string) => {
  return repo.getRoleById(id);
};

export const addRole = async (title: string, name: string) => {
  if (!title || !name) {
    throw new Error("Title and name required");
  }

  return repo.createRole({
    title,
    name,
  });
};

export const removeRole = async (id: string) => {
  return repo.deleteRole(id);
};
