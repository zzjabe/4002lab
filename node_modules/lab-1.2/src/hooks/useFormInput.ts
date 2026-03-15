import { useState } from "react";

export const useFormInput = (initial: string) => {
  const [value, setValue] = useState(initial);
  const [message, setMessage] = useState("");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setValue(e.target.value);
    setMessage("");
  };

  const reset = () => {
    setValue("");
    setMessage("");
  };

  const validate = (fn: () => string) => {
    setMessage(fn());
  };

  return {
    value,
    onChange,
    message,
    reset,
    validate,
  };
};
