import * as repo from "../repositories/roleRepo";

export const getRoles = () => repo.getRoles();

export const addRole = (token: string, title: string, name: string) =>
  repo.addRole(token, title, name);

export const deleteRole = (token: string, id: string) =>
  repo.deleteRole(token, id);
