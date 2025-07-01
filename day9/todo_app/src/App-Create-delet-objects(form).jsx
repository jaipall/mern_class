import { useState } from "react";
const App = () => {
  const [users, setUser] = useState([]);
  const handleform = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value,e.target.username.value);
    // console.log(e.target[1].value,e.target.city.value);
    const username = e.target.username.value;
    const city = e.target.city.value;

    setUser((prev) => {
      const temp = [...prev];
      temp.push({ username, city });
      return temp;
    });
  };

  const handleDelete = (idx) => {
    // console.log(idx);
    setUser((prev) => {
      const temp = [...prev];
      temp.splice(idx, 1);
      return temp;
    });
  };
  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" name="username" />
        <input type="text" name="city" />
        <button>Submit</button>
      </form>
      <div>
        {users.map((elem, idx) => {
          return (
            <div key={idx}>
              <h4>{elem.username}</h4>
              <p>{elem.city}</p>
              <button
                onClick={() => {
                  console.log(idx);
                  handleDelete(idx);
                }}
              >
                Delet
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
