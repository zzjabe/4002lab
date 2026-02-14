import roleRepo from "../repositories/roleRepo";

export const roleService = {
  async getAll() {
    return roleRepo.getAll();
  },

  async addRole(name: string, title: string): Promise<void> {
    const trimmedName = name.trim();
    const trimmedTitle = title.trim();

    if (trimmedName.length < 3) {
      throw new Error("Role name must be at least 3 characters.");
    }

    if (!trimmedTitle) {
      throw new Error("Title is required.");
    }

    if (roleRepo.exists(trimmedName)) {
      throw new Error("Role name already exists.");
    }

    roleRepo.add({
      name: trimmedName,
      title: trimmedTitle,
    });
  },

  async deleteRole(name: string): Promise<void> {
    roleRepo.delete(name);
  },
};
