// console.log(window);
// console.log(window.document);
// console.dir(window.document);

// console.log(window.document.children[0].children[1].children[0].innerHTML);

// -------------------------------------------------------------------------
// 1.doucment.getElement_s_ByTagName --> [ ] (iterable) (HTML collection)

// const heading = document.getElementsByTagName("h1");
// console.log("heading", heading);

// const heading = document.getElementsByTagName("h3");
// console.log("heading", heading);

// const header = document.getElementsByTagName("header");
// console.log("heading", header);

// heading[0].innerText = "Hello Rishabh";
// heading[1].innerText = "Hello Mohan";

// ---------------------------------------------------------------------
// 2. document.getElement_s_ByClassName --> [ ]

// const headings = document.getElementsByClassName("text-brow");
// console.log("headings", headings);

// headings[0].style.color = "brown";
// headings[1].style.color = "brown";

// ---------------------------------------------------------------------
// 3.document.getElementById --> element or null

// const text = document.getElementById("text-1");
// text.style.backgroundColor = "lime";

// --------------------------------------------------------------------------------
// 4. document.querySelectorAll --> []  (HTML Collection)

// const titles = document.querySelectorAll("h3");

// const textBrownElement = document.querySelectorAll(".text-brow");

// const textPara = document.querySelectorAll("#text-1");

// -------------------------------------------------------------------------------------------------
// 5. document.querySelector --> []  (HTML Collection)

// const title = document.querySelector("h3");
// console.log(title);

// const textBrownElement = document.querySelector(".text-brow");
// console.log(textBrownElement);

// const textPara = document.querySelector("#text-1");
// console.log(textPara);
