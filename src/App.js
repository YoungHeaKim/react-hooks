import React, { useState } from "react";

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

const App = () => {
  // const [item, setItem] = useState();
  const name = useInput("");

  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
