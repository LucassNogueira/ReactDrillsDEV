import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const foods = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
  const list = foods
    .filter((element, index) => {
      return element.includes(userInput);
    })
    .map((el, index) => {
      return <h2 key={index}>{el}</h2>;
    });

  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      {list}
    </div>
  );
}

export default App;
