const domRoot = document.getElementById("root");
const reactroot = ReactDOM.createRoot(domRoot);

// reactroot.render(
//   <div>
//     <h1>hello</h1>
//     <div>
//       <p>hii</p>
//       <ul>
//         <li>Item1</li>
//         <li>Item2</li>
//       </ul>
//     </div>
//   </div>
// );

// const card = (
//   <div className="card">
//     <h1>Title</h1>
//     <p>Description</p>
//   </div>
// );

// const card2 = (
//   <div className="card">
//     <h1>Title2</h1>
//     <p>Description</p>
//   </div>
// );

// const card3 = (
//   <div className="card">
//     <h1>Title3</h1>
//     <p>Description</p>
//   </div>
// );

// const container = (
//   <div>
//     {card}
//     {card2}
//     {card3}
//   </div>
// );
// reactroot.render(container);

// --------------------------------------------------------------------

// const card = (title) => {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>Description</p>
//     </div>
//   );
// };

// const container = (
//   <div>
//     {card("Hello")}
//     {card("Notice..")}
//     {card("Warning")}
//   </div>
// );
// reactroot.render(container);

// ---------------------------------------------------------------
const Card = (obj) => {
  return (
    <div className="card">
      <h1>{obj.title}</h1>
      <p>Description</p>
    </div>
  );
};

const Card2 = (title) => {
  return (
    <div className="card">
      <h1>-----DONE--------</h1>
      <p>Description</p>
    </div>
  );
};

const container = (
  <div>
    {Card({ title: "Hello" })}
    <Card title="Noticec"></Card>
    {Card({ title: "Notice.." })}
    {Card({ title: "Warning" })}
    {Card2}
  </div>
);
reactroot.render(container);
