import { useState } from "react";

const App=()=>{
  const [arr,setArr]=useState(["kiwi","banana"]);
  console.log("new array-->",arr);

  const handleAddFruit=()=>{
    // const temp=[...arr];
    // temp.push('mango');
    // console.log("arr",temp);
    // setArr(temp);
    setArr((prev)=>{
      const temp=[...prev];
      temp.push("mango");
      console.log("temp",temp);
      return temp;
    })
  }

  return (
    <div>
      <ul>
        {arr.map((elem)=>{  //map support return forEach does not
          return <li>{elem}</li>
        })}
      </ul>
      <button onClick={handleAddFruit}>Add mango</button>
    </div>
  )
}

export default App;