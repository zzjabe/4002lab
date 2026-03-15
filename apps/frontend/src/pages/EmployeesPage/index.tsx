import { useEmployees } from "../../hooks/useEmployees";
import { useDepartments } from "../../hooks/useDepartments";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";

function EmployeePage() {
  const { employees, addEmployee, loading } = useEmployees();
  const { departments } = useDepartments();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <AddEmployeeForm departments={departments} onAddEmployee={addEmployee} />

      <EmployeeList employees={employees} departments={departments} />
    </>
  );
}

export default EmployeePage;
