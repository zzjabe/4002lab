const API = "http://localhost:3000";

export const getEmployees = async () => {
  const res = await fetch(`${API}/employees?include=department`);
  return res.json();
};

export const addEmployee = async (
  departmentId: string,
  firstName: string,
  lastName: string,
) => {
  const res = await fetch(`${API}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departmentId, firstName, lastName }),
  });

  return res.json();
};
