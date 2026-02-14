import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import type { Department } from "../types/department";

export const useEmployees = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const data = await employeeService.getAll();
    setDepartments(data);
    setLoading(false);
  };

  const addEmployee = async (
    deptName: string,
    firstName: string,
    lastName: string,
  ) => {
    await employeeService.addEmployee(deptName, firstName, lastName);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return {
    departments,
    loading,
    addEmployee,
    refresh: load,
  };
};
