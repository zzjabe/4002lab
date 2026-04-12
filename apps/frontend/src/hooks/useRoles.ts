import { useEffect, useState } from "react";
import * as service from "../services/roleService";
import type { Role } from "../../../../shared/types/role";
import { useAuth } from "@clerk/react";

export const useRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();

  const load = async () => {
    setLoading(true);

    const data = await service.getRoles();

    setRoles(data);

    setLoading(false);
  };

  const addRole = async (title: string, name: string) => {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await service.addRole(token, title, name);

    await load();
  };

  const deleteRole = async (id: string) => {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await service.deleteRole(token, id);

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
