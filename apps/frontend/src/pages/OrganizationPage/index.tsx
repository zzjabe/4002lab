import { useRoles } from "../../hooks/useRoles";
import AddRoleForm from "../../components/AddRoleForm/AddRoleForm";
import { Show, SignInButton } from "@clerk/react";

function RolePage() {
  const { roles, addRole, deleteRole, loading } = useRoles();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <Show when="signed-in">
        <AddRoleForm onAddRole={addRole} />
      </Show>
      <Show when="signed-out">
        <div className="login-prompt">
          <p>You must be logged in to create a role.</p>
          <SignInButton />
        </div>
      </Show>
      <ul className="role-list">
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.title}</strong> — {role.name}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RolePage;
