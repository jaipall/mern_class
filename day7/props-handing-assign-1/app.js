const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// const App = () => {
//   return (
//     <div>
//       <hi>Hello</hi>
//     </div>
//   );
// };

// reactRoot.render(App());
// reactRoot.render(<App />);

const arr = [
  {
    name: "Prabjyot",
    score: 29,
  },
  {
    name: "Rakesh",
    score: 21,
  },
  {
    name: "Mohan",
    score: 31,
  },
  {
    name: "Anurag",
    score: 39,
  },
];

const styObj = {
  color: "purple",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const Card = (props) => {
  const { name, score } = props;
  return (
    <div class="card">
      <h1 style={{ color: "red" }}>{name}</h1>
      <p style={styObj}>{score}</p>
    </div>
  );
};
 
// const App = () => {
//   return (
//     <div>
//       <h2>Hello</h2>
//       <Card name={arr[0].name} score={arr[0].score} />
//       <Card name={arr[1].name} score={arr[1].score} />
//       <Card name={arr[2].name} score={arr[2 ].score} />
//       <Card name={arr[3].name} score={arr[3].score} />
//     </div>
//   );
// };

const App = () => {
  return (
    <div class="parent">
      <h2>Hello</h2>
      {arr.map((elem) => {
        return <Card name={elem.name} score={elem.score} />;
      })}
    </div>
  );
};

reactRoot.render(App());
