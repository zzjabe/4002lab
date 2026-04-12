const API = import.meta.env.VITE_API_URL;

export const getEmployees = async () => {
  const res = await fetch(`${API}/employees?include=department`);
  return res.json();
};

export const addEmployee = async (
  token: string,
  departmentId: string,
  firstName: string,
  lastName: string,
) => {
  const res = await fetch(`${API}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ departmentId, firstName, lastName }),
  });

  return res.json();
};
