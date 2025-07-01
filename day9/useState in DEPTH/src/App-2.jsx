import { useState } from "react";

const App = () =>{
  const [montior,remote] = useState(0); // monitor ini by 0
  console.log(montior);

  const handleClick = ()=>{
    remote(montior+1);
    console.log(montior);
  };

  return (
    <div>
      <button onClick={handleClick}>click Me</button>
      <h2>{montior}</h2>
    </div>
  )
}

export default App;