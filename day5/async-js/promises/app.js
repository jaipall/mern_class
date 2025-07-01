const request = window.fetch("https://dummyjson.com/recipes");
console.log("request", request);
console.log("request", request);

const succcessCb = (response) => {
  console.log("Repose", response);

  const pr2 = response.json();
  pr2.then((data) => {
    console.log("Data", data);

    pr2.then((data) => {
      renderUI;
    });
  });
};
const errorCb = (err) => {
  alert("Unable to get product --> ", err.message);
};
request.then(succcessCb).catch(errorCb);
