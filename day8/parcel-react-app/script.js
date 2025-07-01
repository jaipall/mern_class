// console.log(React);
import React from "react";
import ReactDOM from "react-dom/client";
console.log(React);

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("Jaipal");
  return (
    <div>
      <h1>hello from React APP!</h1>
    </div>
  );
};

reactRoot.render(<App />);
