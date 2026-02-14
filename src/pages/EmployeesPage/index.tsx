import { useEmployees } from "../../hooks/useEmployees";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import "./index.css";

function EmployeePage() {
  const { departments, addEmployee, loading } = useEmployees();

  return (
    <main className="employee-page">
      {loading && <p>Loading...</p>}

      <AddEmployeeForm departments={departments} onAddEmployee={addEmployee} />

      <EmployeeList departments={departments} />
    </main>
  );
}

export default EmployeePage;
