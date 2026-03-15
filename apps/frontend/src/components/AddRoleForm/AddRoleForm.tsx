import { useFormInput } from "../../hooks/useFormInput";

type Props = {
  onAddRole: (title: string, name: string) => Promise<void>;
};

function AddRoleForm({ onAddRole }: Props) {
  const title = useFormInput("");
  const name = useFormInput("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    await onAddRole(title.value, name.value);

    title.reset();
    name.reset();
  };

  return (
    <form onSubmit={submit}>
      <input {...title} placeholder="Role Title" />

      <input {...name} placeholder="Person Name" />

      <button type="submit">Add Role</button>
    </form>
  );
}

export default AddRoleForm;
