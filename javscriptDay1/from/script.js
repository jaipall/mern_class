function checkdata() {
  var username = document.getElementById("name");
  var email = document.getElementById("email");

  if (username.value == "") {
    alert("please enter the name");
    username.focus();
    return false;
  }
  if (email.value == "") {
    alert("Please enter the email");
    email.focus();
    return false;
  }
  return true;
}
