import { useFormInput } from "../../hooks/useFormInput";

type Props = {
  onAddRole: (name: string, title: string) => Promise<void>;
};

function AddRoleForm({ onAddRole }: Props) {
  const name = useFormInput("");
  const title = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await onAddRole(name.value, title.value);

      name.reset();
      title.reset();
    } catch (err: any) {
      name.validate(() => err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...name} placeholder="Role name" />
      {name.message && <p>{name.message}</p>}

      <input {...title} placeholder="Role title" />

      <button type="submit">Add Role</button>
    </form>
  );
}

export default AddRoleForm;
