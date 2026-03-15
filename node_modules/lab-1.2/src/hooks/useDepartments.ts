import { useEffect, useState } from "react";
import departmentService from "../services/departmentService";
import type { Department } from "../../../../shared/types/department";

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);

      const data = await departmentService.getAll();

      setDepartments(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    departments,
    loading,
    refresh: load,
  };
};
