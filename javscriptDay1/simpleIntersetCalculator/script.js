function update() {
  let ans = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = ans;
}

function compute() {
  let a = document.getElementById("amount").value;
  let b = document.getElementById("rate").value;
  let c = document.getElementById("years").value;
  let interset = (a * c * b) / 100;
  let year = new Date().getFullYear() + parseInt(c);
  let amount = parseInt(a) + parseFloat(interset);
  let res = document.getElementById("result");

  if (a < 0) {
    alert("please enter positive number!");
    document.getElementById("amount").focus();
  } else {
    res.innerHTML =
      "If you deposite $" +
      "<marks>" +
      a +
      "</mark>" +
      ",<br> at an interest rate of " +
      "<mark>" +
      b +
      "%" +
      "</mark>" +
      "<br> You will receive an amount of $" +
      "<mark>" +
      amount +
      "</mark>" +
      ",<br> in the year " +
      "<mark>" +
      year +
      "</mark>" +
      "<br>";
  }
}
