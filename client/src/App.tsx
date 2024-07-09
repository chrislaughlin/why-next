import { useState } from "react";
import "./App.css";
import { Transformer } from "./data";

function App() {
  const [transformers, setTransformers] = useState<Transformer[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    setTransformers(data);
  };

  const createTransformer = async () => {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Chris Laughlin",
        faction: "Autobots",
        role: "New Leader",
      }),
    });
    const data = await response.json();
    setTransformers(data);
  };

  return (
    <>
      <h1>Transformers</h1>
      <button onClick={fetchData}>Load data</button>
      <button onClick={createTransformer}>Create Data</button>
      <ul>
        {transformers.map((transformer) => (
          <li key={transformer.name}>{transformer.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
