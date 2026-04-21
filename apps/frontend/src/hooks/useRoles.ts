import { useEffect, useState } from "react";
import * as service from "../services/roleService";
import type { Role } from "../../../../shared/types/role";
import { useAuth, useClerk } from "@clerk/react";
import { useOrganization, useOrganizationList } from "@clerk/react";

export const useRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);

  const { organization } = useOrganization();
  const { userMemberships, setActive } = useOrganizationList();

  const { getToken } = useAuth();
  const clerk = useClerk();

  const load = async () => {
    setLoading(true);

    try {
      const token = await getToken({ skipCache: true });

      if (!token) throw new Error("No token");

      const data = await service.getRoles();

      setRoles(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const setupOrg = async () => {
      if (!organization && userMemberships?.data?.length && setActive) {
        const orgId = userMemberships.data[0].organization.id;

        await setActive({
          organization: orgId,
        });
        await clerk.session?.reload();
      }
    };

    setupOrg();
  }, [organization, userMemberships, setActive, clerk]);

  useEffect(() => {
    if (organization) {
      load();
    }
  }, [organization]);

  const addRole = async (title: string, name: string) => {
    const token = await getToken({ skipCache: true });

    if (!token) throw new Error("User not authenticated");

    await service.addRole(token, title, name);

    await load();
  };

  const deleteRole = async (id: string) => {
    const token = await getToken({ skipCache: true });

    if (!token) throw new Error("User not authenticated");

    await service.deleteRole(token, id);

    await load();
  };

  return {
    roles,
    addRole,
    deleteRole,
    loading,
    organization,
  };
};
