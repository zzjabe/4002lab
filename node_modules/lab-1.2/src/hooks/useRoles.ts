import { useEffect, useState } from "react";
import * as service from "../services/roleService";
import type { Role } from "../../../../shared/types/role";

export const useRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);

    const data = await service.getRoles();

    setRoles(data);

    setLoading(false);
  };

  const addRole = async (title: string, name: string) => {
    await service.addRole(title, name);
    await load();
  };

  const deleteRole = async (id: string) => {
    await service.deleteRole(id);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return {
    roles,
    addRole,
    deleteRole,
    loading,
  };
};
