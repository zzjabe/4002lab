import { v4 as uuid } from "uuid";
import * as repo from "../repositories/roleRepository";

export const getAllRoles = async () => repo.getRoles();

export const addRole = async (title: string, name: string) => {
  if (!title || !name) {
    throw new Error("Title and name required");
  }

  const role = {
    id: uuid(),
    title,
    name,
  };

  return repo.createRole(role);
};

export const removeRole = async (id: string) => repo.deleteRole(id);
