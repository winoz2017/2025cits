import React, { useState } from "react";

function App() {
  const han = "test";
  const [count, setCount] = useState(0);
  return (
    <div>
      {han} / {count}
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger">
        -
      </button>
      <div style={{ color: "red", fontSize: "20px" }}>test</div>
      <div>{count > 0 ? count : ""}</div>
    </div>
  );
}

export default App;
