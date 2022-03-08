import React, { useState } from "react";
import "./App.css";
function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;
