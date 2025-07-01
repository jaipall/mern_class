import { useState } from "react";

const App = () =>{
  const [montior,remote] = useState(()=>{
    const val=localStorage.getItem("counter-value");// all the values store in localhost in string
    if(val){
      return parseInt(val);
    }
    else{
      return 0;
    }
  }); // monitor ini by 0
  console.log(montior);

  const handleClick = ()=>{
    remote((prev)=>{
      // return prev+1;
      const newValue = prev +1;
      localStorage.setItem("counter-value",newValue);// this setIteam Store the ke-value in local storage
      return newValue;
    });
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