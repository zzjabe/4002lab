import type { EmployeeWithDepartment } from "../../../../../shared/types/employee";
import type { Department } from "../../../../../shared/types/department";

type Props = {
  employees: EmployeeWithDepartment[];
  departments: Department[];
};

function EmployeeList({ employees, departments }: Props) {
  return (
    <div className="departments-grid">
      {departments.map((dept) => {
        const deptEmployees = employees.filter(
          (emp) => emp.department?.id === dept.id,
        );

        return (
          <div key={dept.id}>
            <h3>{dept.name}</h3>

            <ul>
              {deptEmployees.map((emp) => (
                <li key={emp.id}>
                  {emp.firstName} {emp.lastName}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeList;
