import { useState } from "react";

export const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(e.target.value);
    setMessage("");
  };

  const validate = (validator: (value: string) => string | null) => {
    const error = validator(value);

    if (error) {
      setMessage(error);
      return false;
    }

    setMessage("");
    return true;
  };

  const reset = () => {
    setValue(initialValue);
    setMessage("");
  };

  return {
    value,
    message,
    onChange,
    validate,
    reset,
  };
};
