const API = import.meta.env.VITE_API_URL;

export const getRoles = async () => {
  const res = await fetch(`${API}/roles`);
  return res.json();
};

export const addRole = async (token: string, title: string, name: string) => {
  const res = await fetch(`${API}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // ⭐
    },
    body: JSON.stringify({ title, name }),
  });

  return res.json();
};

export const deleteRole = async (token: string, id: string) => {
  await fetch(`${API}/roles/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // ⭐
    },
  });
};
