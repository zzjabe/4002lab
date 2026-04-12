import { useEmployees } from "../../hooks/useEmployees";
import { useDepartments } from "../../hooks/useDepartments";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
import { Show, SignInButton } from "@clerk/react";

function EmployeePage() {
  const { employees, addEmployee, loading } = useEmployees();
  const { departments } = useDepartments();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <Show when="signed-in">
        <AddEmployeeForm
          departments={departments}
          onAddEmployee={addEmployee}
        />
      </Show>
      <Show when="signed-out">
        <div className="login-prompt">
          <p>You must be logged in to create an employee.</p>
          <SignInButton />
        </div>
      </Show>
      <EmployeeList employees={employees} departments={departments} />
    </div>
  );
}

export default EmployeePage;
