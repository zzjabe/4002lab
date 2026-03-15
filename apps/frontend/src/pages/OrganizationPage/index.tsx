import { useRoles } from "../../hooks/useRoles";
import AddRoleForm from "../../components/AddRoleForm/AddRoleForm";

function RolePage() {
  const { roles, addRole, deleteRole, loading } = useRoles();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <AddRoleForm onAddRole={addRole} />

      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.title}</strong> — {role.name}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RolePage;
