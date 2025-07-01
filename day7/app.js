// console.log("Day 7 react!");

//  <ul>
//     <list>Item 1</list>
//     <list>Item 2</list>
// </ul>

// const ullist = document.getElementById("root");

// const func = (elm) =>{
//     const newDiv = document.createElement('div');
//     newDiv.innerHTML=`
//     <ul>
//         <li>Item 1></li>`
// }

// const rootElm = document.getElementById("root");

// const item1 = document.createElement("li");
// item1.innerHTML = "Item 1";

// const Item2 = document.createElement("li");
// Item2.innerHTML = "Item2";

// const list = document.createElement("ul");
// list.appendChild(item1);
// list.appendChild(Item2);

// rootElm.appendChild(list);

// ----------------------------------------------------------------------------------

// const item1 = React.createElement("li", {}, "Item 1"); //create a list in react
// console.log(item1);
// const item2 = React.createElement("li", {}, "Item 2"); //create a list 2 in react

// const list = React.createElement("ul", {}, [item1, item2]); //create a orderlist (ul)

// const rootElem = document.getElementById("parent"); //call the parent root
// const reactRoot = ReactDOM.createRoot(rootElem); //connect the DOM to react with root element
// reactRoot.render(list);

// ---------------------------------------------------------------------------
// const item1 = {
//   type: "li",
//   key: null,
//   ref: null,
//   props: {
//     children: "Item 1",
//   },
//   _owner: null,
//   _store: {},
// };

// const rootElem = document.getElementById("parent"); //call the parent root
// const reactRoot = ReactDOM.createRoot(rootElem); //connect the DOM to react with root element
// reactRoot.render(item1);

// const item1 = {
//     $$typeof: Symbol(react.element)
//   type: "li",
//   key: null,
//   ref: null,
//   props: {
//     children: "Item 1",
//   },
//   _owner: null,
//   _store: {},
// };

// const rootElem = document.getElementById("parent"); //call the parent root
// const reactRoot = ReactDOM.createRoot(rootElem); //connect the DOM to react with root element
// reactRoot.render(item1);

// ----------------------------------------------------------------------------------------------------------------------

// const item1 = <li>Item 1</li>;
// const item2 = <li>Item 2</li>;
// const list = (
//   <ul>
//     {item1} {item2}
//   </ul>
// );

const list = (
  <ul>
    <list>Item 1</list>
    <list>Item 2</list>
  </ul>
); //react element

const rootElem = document.getElementById("parent"); //call the parent root
const reactRoot = ReactDOM.createRoot(rootElem); //connect the DOM to react with root element
reactRoot.render(list);
