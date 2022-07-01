import React, { useState } from "react";
import Highlight from "./components/Highlight";

function App() {
  const [highlight, setHighlight] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setHighlight(value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Highlight
        text="the quick brown fox jumps over the lazy dog"
        highlight={highlight}
      />
    </div>
  );
}

export default App;
