import { useState } from "react";

const arr = ["kiwi", "banana", "pineapple"];

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  console.log("editIndex", editIndex);
  return (
    <div>
      {arr.map((elem, idx) => {
        return (
          <div style={{ backgroundColor: idx === editIndex ? "red" : "green" }}>
            (idx==editIndex ? <input type="text" /> : <h2>{elem}</h2>)
            <button
              onClick={() => {
                setEditIndex(idx);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
      <h1>Hello</h1>
    </div>
  );
};
export default App;
