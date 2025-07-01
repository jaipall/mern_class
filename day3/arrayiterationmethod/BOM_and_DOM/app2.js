//1. create element by document.createElement()
// 2.attach a the element in boc

const parent = document.getElementById("root");
// add in root
const title = document.createElement("h1");
title.innerText = "Hello from Dom!";
parent.append(title);
title.style.textDecoration = "underline";
title.style.textDecorationColor = "magenta";

const title2 = document.createElement("h1");
title2.innerText = "Hello from Dom2!";

parent.append(title2);
