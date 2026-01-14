function Department({ dept }) {
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