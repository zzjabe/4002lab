import { useEffect, useState } from "react";
import * as service from "../services/employeeService";
import type { EmployeeWithDepartment } from "../../../../shared/types/employee";
import { useAuth } from "@clerk/react";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeWithDepartment[]>([]);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();

  const load = async () => {
    setLoading(true);

    const data = await service.getAllEmployees();

    setEmployees(data);

    setLoading(false);
  };

  const addEmployee = async (
    departmentId: string,
    firstName: string,
    lastName: string,
  ) => {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await service.addEmployee(token, departmentId, firstName, lastName);

    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return { employees, addEmployee, loading };
};
