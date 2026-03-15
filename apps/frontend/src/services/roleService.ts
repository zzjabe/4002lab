import * as repo from "../repositories/roleRepo";

export const getRoles = () => repo.getRoles();

export const addRole = (title: string, name: string) =>
  repo.addRole(title, name);

export const deleteRole = (id: string) => repo.deleteRole(id);
