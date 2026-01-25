import { useState } from "react";
import type { Department } from "../../data/departments";
import "./AddEmployeeForm.css";

type Props = {
  departments: Department[];
  onAddEmployee: (deptName: string, firstName: string, lastName: string) => void;
};

function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deptName, setDeptName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    if (!deptName) {
      setError("Please select a department.");
      return;
    }

    onAddEmployee(deptName, firstName, lastName);

    setFirstName("");
    setLastName("");
    setDeptName("");
  }

  return (
    <form className="add-employee-form" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>

      {error && <div className="form-error">{error}</div>}

      <div className="form-row">
        <label>First Name</label>
        <input
          placeholder="Please enter your first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Last Name</label>
        <input
          placeholder="Please enter your last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Department</label>
        <select
          value={deptName}
          onChange={e => setDeptName(e.target.value)}
        >
          <option value="">Select department</option>
          {departments.map(dept => (
            <option key={dept.name} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;