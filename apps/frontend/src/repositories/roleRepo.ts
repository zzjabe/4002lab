const API = import.meta.env.VITE_API_URL;

export const getRoles = async () => {
  const res = await fetch(`${API}/roles`);
  return res.json();
};

export const addRole = async (title: string, name: string) => {
  const res = await fetch(`${API}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, name }),
  });

  return res.json();
};

export const deleteRole = async (id: string) => {
  await fetch(`${API}/roles/${id}`, {
    method: "DELETE",
  });
};
