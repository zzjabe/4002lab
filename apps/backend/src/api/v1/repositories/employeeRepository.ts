import { prisma } from "../db/prisma";
import { Employee } from "@shared/types/employee";
import { Prisma } from "@prisma/client";

export const getEmployees = async () => {
  return prisma.employee.findMany({
    include: { department: true },
  });
};

export const getEmployeeById = async (id: string) => {
  return prisma.employee.findUnique({
    where: { id },
    include: { department: true },
  });
};

export const createEmployee = async (data: Prisma.EmployeeCreateInput) => {
  return prisma.employee.create({ data });
};

export const updateEmployee = async (id: string, data: Partial<Employee>) => {
  return prisma.employee.update({
    where: { id },
    data,
  });
};

export const deleteEmployee = async (id: string) => {
  await prisma.employee.delete({
    where: { id },
  });
  return true;
};
