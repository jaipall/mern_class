import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState(() => {
    const val = localStorage.getItem("Search");
    if (val) {
      return val;
    } else {
      return "arun";
    }
    // return "arun";
  });
  console.log(searchText);

  const handleSearch = (e) => {
    // console.log(e)
    const val = e.target.value;
    localStorage.setItem("Search", val);
    setSearchText(val);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearch} />
      <h2>{searchText}</h2>
    </div>
  );
};

export default App;
