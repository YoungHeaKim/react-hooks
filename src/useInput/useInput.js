import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    const {
      target: { value }
    } = event;

    setValue(value);
  };

  return { value, onChange };
};

export default useInput;
