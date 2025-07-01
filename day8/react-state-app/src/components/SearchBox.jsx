// re-rendering --> re-run the function
// component(function) is re-rending only when the state change Or props(arguments) changes
// state variables are the given to use by react
// if the value the state variable change --> state of the component has change

import { useState } from "react";

// function -->component
// argument-->porps
// react function --> hooks
// re-use a function -->re-rending

const SearchBox = () => {
    // let searchText = "Anuj";
    const [monitor,remote] =useState(); 
    const handleSearch=(e)=>{
        // searchText=e.target.value;
        // console.log(e.target.value);
        remote(e.target.value); //Noted
        console.log(monitor);
    };
    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <p>{monitor}</p>
        </div>
    );
};
export {SearchBox};