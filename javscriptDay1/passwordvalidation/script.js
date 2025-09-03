const passwords = [
  "Password123",
  "short",
  "ValidPass123",
  "too_long_password_example",
  "12345",
];

function validation() {
  // const regex = /^[a-zA-Z0-9]{8,20}$/;
  const regex = /^[a-zA-Z0-9]{8,20}$/;
  passwords.forEach((password) => {
    if (regex.test(password)) {
      console.log(`${password} is vaild`);
    } else {
      console.log(`${password} is not valid`);
    }
  });
}

validation();
