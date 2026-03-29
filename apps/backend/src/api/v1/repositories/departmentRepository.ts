import { prisma } from "../db/prisma";

export const getDepartments = async () => {
  return prisma.department.findMany();
};

export const getDepartmentById = async (id: string) => {
  return prisma.department.findUnique({
    where: { id },
  });
};

export const createDepartment = async (data: { name: string }) => {
  return prisma.department.create({ data });
};

export const updateDepartment = async (id: string, name: string) => {
  return prisma.department.update({
    where: { id },
    data: { name },
  });
};

export const deleteDepartment = async (id: string) => {
  await prisma.department.delete({ where: { id } });
  return true;
};
