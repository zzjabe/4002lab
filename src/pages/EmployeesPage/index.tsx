import { useState } from "react";
import Department from "../../components/Department/Department";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
import initialDepartments from "../../data/departments";
import type{ Department as DeptType } from "../../data/departments";
import './index.css'

function EmployeesPage() {
  const [departments, setDepartments] = useState<DeptType[]>(initialDepartments);

  function addEmployee(deptName:string, firstName:string, lastName:string) {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === deptName
        ? {
          ...dept,
          employees: [...dept.employees, { firstName, lastName}],
        }
        :dept
      )
    );
  }

  return (
    <>
      <main>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <Department key={index} dept={dept} />
          ))}
        </div>


        <AddEmployeeForm
          departments={departments}
          onAddEmployee={addEmployee}
        />
      </main>
    </>
  )
}

export default EmployeesPage