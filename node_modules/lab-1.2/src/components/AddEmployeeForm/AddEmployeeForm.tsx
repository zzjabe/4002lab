import { useFormInput } from "../../hooks/useFormInput";
import type { Department } from "../../../../../shared/types/department";

type Props = {
  departments: Department[];
  onAddEmployee: (
    departmentId: string,
    firstName: string,
    lastName: string,
  ) => Promise<void>;
};

function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const departmentId = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await onAddEmployee(departmentId.value, firstName.value, lastName.value);

      firstName.reset();
      lastName.reset();
      departmentId.reset();
    } catch (err: any) {
      firstName.validate(() => err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...firstName} placeholder="First Name" />
      {firstName.message && <p>{firstName.message}</p>}

      <input {...lastName} placeholder="Last Name" />

      <select {...departmentId}>
        <option value="">Select Department</option>

        {departments.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
