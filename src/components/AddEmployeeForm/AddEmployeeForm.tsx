import { useFormInput } from "../../hooks/useFormInput";
import "./AddEmployeeForm.css";

type Props = {
  departments: any[];
  onAddEmployee: (dept: string, first: string, last: string) => Promise<void>;
};

function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const deptName = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await onAddEmployee(deptName.value, firstName.value, lastName.value);

      firstName.reset();
      lastName.reset();
      deptName.reset();
    } catch (err: any) {
      firstName.validate(() => err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...firstName} placeholder="First Name" />
      {firstName.message && <p>{firstName.message}</p>}

      <input {...lastName} placeholder="Last Name" />

      <select {...deptName}>
        <option value="">Select</option>
        {departments.map((d) => (
          <option key={d.name}>{d.name}</option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
