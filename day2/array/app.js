//Array
// const arr = ["tata","mahindra","suzuki","hyundai"];
// console.log(arr);

//Read
// console.log(arr[1]);

//1. De-structure
// const company = arr[1];
// console.log(company);

//2.
// const [a,b,c] =arr;
// console.log(a,b);

// const arr1 = ["tata", "mahindra", "suzuki", "hyundai"];
// const arr2 = ["kia", "byd", "mistsubish"];
// console.log(arr1);
// console.log(arr2);

// const [x, y, z] = arr2;
// console.log(x, z);

//------------------------------------------------
// ADD
// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// arr[10] = "Honda";
// console.log(arr);

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];
// arr.push("honda");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("honda");
// console.log(arr);

// splice is use in push and pop

// arr.splice(1, 2, "kiya", "byd", "honda"); //-->removing & addding element   -->first 1 is for index ,and second 2 is for no. element
// console.log(arr);

// arr.splice(1,1);  //--->removing new element
// console.log(arr);

// arr.splice(1,0,"johndeer"); //-->adding new elements
// console.log(arr);

// --------------------------------------------------------------

//find the index of the element which is equals to 'suzuki'
// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("honda"));

//find the index of the element which is equals to 'suzuki'
// const arr = [
//   { name: "jay", city: "agra" },
//   { name: "aadhinav", city: "kanpur" },
//   { name: "sumedh", city: "Mumbai" },
// ];
// console.log(arr.indexOf({ name: "Abhinav", city: "agra" }));
// console.log(arr.indexOf({ name: "Abhinav", city: "kkanpur" }));

// const p1 = { name: "raj" };
// const p2 = { name: "raj" };
// console.log(p1 == p2);

// console.log(p1==p1);

// const p1 = { name: "raj" };
// const p2 = { ...p1 }; //if we add a new {} ca it can be compare it always be false //--> ever new {} calrilibraket have new address
// console.log(p1 == p2);

// ---------------------------------------------

// find method
// const myfun = (a) => {
//   //-->gives element
//   console.log(a);
// };
// const arr = ["ab", "xy", "mn", "ab", "pq"];
// const elem = arr.find(myfun);

// const myfun = (a, b) => {
//   //-->give index
//   console.log(a, b);
// };
// const arr = ["ab", "xy", "mn", "ab", "pq"];
// const elem = arr.find(myfun);

// const  myfun = (a,b,c) => {  //--> give compltet arrary
//     console.log(a,b,c);
// }
// const arr= ["ab","xy","mn","ab","pq"];
// const elem = arr.find(myfun);

// const myfun = (a, b, c, d) => {
//   console.log(a, b, c, d);
//   if (a == "mn") return true;
//   else return false;
// };
// const arr = ["ab", "xy", "mn", "ab", "pq"];
// const elem = arr.find(myfun);
// console.log("elem: ", elem);

// const arr = [
//     {name: "jay",city:"agra"},
//     {name: "abhinav",city:"kanpur"},
//     {name:"sumedh",city:"Mumbai"},
// ];

// const myfun = (a) => {
//     if(a.name === "abhinav") return true;
//     return false;
// }

// const ans = arr.find(myfun);
// console.log(ans);

// -----------------------------------------------------------------
// map method

// const arr = [
//   { name: "jay", city: "agra", score: 33 },
//   { name: "abhinav", city: "kanpur", score: 24 },
//   { name: "sumedh", city: "Mumbai", score: 36 },
// ];

// const myfun = (elem) => {
//   //   if (elem.score < 25) {
//   //     return "No";
//   //   } else {
//   //     return "Yes";
//   //   }
//   if (elem.score < 25) {
//     return { ...elem, remark: "fail" };
//   } else {
//     return { ...elem, remark: "pass" };
//   }
// };

// const ans = arr.map(myfun);
// console.log("ans", ans);
