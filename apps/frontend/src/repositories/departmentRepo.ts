const API = import.meta.env.VITE_API_URL;

const departmentRepo = {
  async getDepartments() {
    const res = await fetch(`${API}/departments`);

    if (!res.ok) {
      throw new Error("Failed to fetch departments");
    }

    return res.json();
  },
};

export default departmentRepo;
