import { useRoles } from "../../hooks/useRoles";
import AddRoleForm from "../../components/AddRoleForm/AddRoleForm";
import "./index.css";

function RolePage() {
  const { roles, addRole, deleteRole, loading } = useRoles();

  return (
    <main className="organization-page">
      <AddRoleForm onAddRole={addRole} />

      {loading && <p>Loading...</p>}

      <ul className="role-list">
        {roles.map((role) => (
          <li key={role.name}>
            <strong>{role.name}</strong> - {role.title}
            <button onClick={() => deleteRole(role.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default RolePage;
