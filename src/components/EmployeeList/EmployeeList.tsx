import type { Department } from "../../types/department";
import "./EmployeeList.css";

type Props = {
  departments: Department[];
};

function EmployeeList({ departments }: Props) {
  return (
    <div className="departments-grid">
      {departments.map((dept) => (
        <li key={dept.name}>
          <h3>{dept.name}</h3>
          <ul>
            {dept.employees.map((emp, i) => (
              <li key={i}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
}

export default EmployeeList;
