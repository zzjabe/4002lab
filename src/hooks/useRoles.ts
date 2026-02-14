import { useEffect, useState } from "react";
import { roleService } from "../services/roleService";
import type { Role } from "../types/role";

export function useRoles() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const data = await roleService.getAll();
    setRoles(data);
    setLoading(false);
  };

  const addRole = async (name: string, title: string) => {
    await roleService.addRole(name, title);
    await load();
  };

  const deleteRole = async (name: string) => {
    await roleService.deleteRole(name);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return {
    roles,
    loading,
    addRole,
    deleteRole,
    refresh: load,
  };
}
