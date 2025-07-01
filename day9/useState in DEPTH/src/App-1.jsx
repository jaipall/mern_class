// function re-run --> component re-rendering
// react re-render's component either on "state" change Or on "props" change

import { useState } from "react";

// hook--> function give to use by react

const App = () => {
  // let searchText="Arun";
  // useState();
  const [montior, remote] = useState(); //Returns a stateful value, and a function to update it.,, order is matter
  const handleSearch = (e) => {
    const value = e.target.value;
    // searchText=value;
    remote(value); //change the value
    console.log(montior); // show the value
  };
  return (
    <div>
      <h1>Hello!</h1>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{montior}</h2>
    </div>
  );
};

export default App;
