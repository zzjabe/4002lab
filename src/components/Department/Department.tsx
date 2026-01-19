import './Department.css'

type Employee = {
  firstName: string;
  lastName: string;
};

type DepartmentType = {
  name: string;
  employees: Employee[];
};

type Props = {
  dept: DepartmentType;
};

function Department({ dept }: Props) {
    return (
        <section>
        <h2>{dept.name}</h2>
        <ul>
            {dept.employees.map((emp, index) => (
            <li key={index}>
                {emp.firstName} {emp.lastName}
            </li>
            ))}
        </ul>
        </section>
    );
}

export default Department;