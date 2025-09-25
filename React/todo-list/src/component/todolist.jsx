// import React, { useState } from "react";

// const Todolist=()=>{
//     const [todos,setTodos]=useState([]);
//     const [headingInput,setHeadingInput]=useState('');
//     const [listInputs,setListInputs]=useState({});
//     const handleAddTodo=()=>{
//         if(headingInput.trim()!==""){
//             setTodos([...todos,{heading:headingInput,list:[]}])
//             setHeadingInput('');
//         }
//     }

//     return(
//         <>
//             <div className="todo-container">
//                 <h1 className="titlw">MyTodo List</h1>
//                 <div>
//                     <input type="text" className="heading-input" placeholder="Enter heading"
//                     onChange={(e)=>setHeadingInput(e.target.value)}
//                     value={headingInput}>
//                     </input>
//                     <button className="add-list-button">Add Heading</button>
//                 </div>
//             </div>

//             <div className="todo-main">
//                     {todos.map((todo,index)=>(
//                         <div className="todo-card" key={index}>
//                             <div className="heading-todo">
//                                 <h3>{todo.heading}</h3>
//                                 <button className="delete-button" onClick={()=>handleDeleteTodo(index)}>Delete Heading</button>
//                             </div>
//                             <div>
//                                 <input type="text" className="list-input"
//                                 placeholder="Add List" value={listInputs[index] || ""}
//                                 onChange={(e)=>handleListInputChange(index,e.target.value)}/>
//                                 <button className="add-list-button" onClick={()=>handleAddList(index)}>
//                                     Add List
//                                 </button>
//                             <div/>
//                             import React, { useState } from "react";

// const Todolist=()=>{
//     const [todos,setTodos]=useState([]);
//     const [headingInput,setHeadingInput]=useState('');
//     const [listInputs,setListInputs]=useState({});
//     const handleAddTodo=()=>{
//         if(headingInput.trim()!==""){
//             setTodos([...todos,{heading:headingInput,list:[]}])
//             setHeadingInput('');
//         }
//     }

//     return(
//         <>
//             <div className="todo-container">
//                 <h1 className="titlw">MyTodo List</h1>
//                 <div>
//                     <input type="text" className="heading-input" placeholder="Enter heading"
//                     onChange={(e)=>setHeadingInput(e.target.value)}
//                     value={headingInput}>
//                     </input>
//                     <button className="add-list-button">Add Heading</button>
//                 </div>
//             </div>

//             <div className="todo-main">
//                     {todos.map((todo,index)=>(
//                         <div className="todo-card" key={index}>
//                             <div className="heading-todo">
//                                 <h3>{todo.heading}</h3>
//                                 <button className="delete-button" onClick={()=>handleDeleteTodo(index)}>Delete Heading</button>
//                             </div>
//                             <div>
//                                 <input type="text" className="list-input"
//                                 placeholder="Add List" value={listInputs[index] || ""}
//                                 onChange={(e)=>handleListInputChange(index,e.target.value)}/>
//                                 <button className="add-list-button" onClick={()=>handleAddList(index)}>
//                                     Add List
//                                 </button>
//                             <div/>

//                         </div>

//                     ))}
//             </div>
//         </>
//     )
// }

// export default Todolist;

//                         </div>

//                     ))}
//             </div>
//         </>
//     )
// }

// export default Todolist;

import React, { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  // Add a new heading
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, list: [] }]);
      setHeadingInput("");
    }
  };

  // Delete a heading
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Update input for list under a heading
  const handleListInputChange = (index, value) => {
    setListInputs({
      ...listInputs,
      [index]: value,
    });
  };

  // Add a list item under a heading
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].list.push(listInputs[index]);
      setTodos(newTodos);

      // Clear input for that heading
      setListInputs({
        ...listInputs,
        [index]: "",
      });
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div>
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            onChange={(e) => setHeadingInput(e.target.value)}
            value={headingInput}
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>

      <div className="todo-main">
        {todos.map((todo, index) => (
          <div className="todo-card" key={index}>
            <div className="heading-todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </div>

            {/* List input */}
            <div>
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ""}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
            </div>

            {/* Show list items */}
            <ul>
              {todo.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todolist;
