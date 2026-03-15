const API = "http://localhost:3000";

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
