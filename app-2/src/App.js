import React from "react";

import "./App.css";

function App() {
  const foods = ["Apple", "Cheese", "Bread", "Burger"];
  const list = foods.map((item) => <h2>{item}</h2>);
  return <div className="App">{list}</div>;
}

export default App;
