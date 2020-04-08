import React from "react";
import { useInput } from "./useInput/index";

const App = () => {
  const name = useInput("");

  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
