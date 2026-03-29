import { prisma } from "../db/prisma";
import { Role } from "../../../../../../shared/types/role";
import { Prisma } from "@prisma/client";

export const getRoles = async () => {
  return prisma.role.findMany();
};

export const getRoleById = async (id: string) => {
  return prisma.role.findUnique({ where: { id } });
};

export const createRole = async (data: Prisma.RoleCreateInput) => {
  return prisma.role.create({ data });
};

export const deleteRole = async (id: string) => {
  await prisma.role.delete({ where: { id } });
  return true;
};
