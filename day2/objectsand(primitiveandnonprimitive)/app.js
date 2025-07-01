//  objects store key value paires and key must be string and symbol
// curt
// const cse35 = {
//   name: "jay",
//   address: "Agra , Up",
//   bloodgroup: "O+",
// };

// console.log(cse35);

// Read the value of property
// const studentName = cse35.name;
// console.log("studentName", studentName);

// // Update the value pf property
// cse35.bloodgroup = "A+";

// // Add a key_value pair
// cse35.collage = "LPU";

// console.log("cse35",cse35);

// // delete a key-value pair
// delete cse35.address;

// console.log("cse35",cse35);

// primitive are all(nuber,string,boolean,etc.) (except object)-->is a data not a object
// non primitive are (objects)

// ------------------------------------------------------------------------------------------------
// const person = {
//   personname: "jay",
//   height: 6,
//   weight: 60,
//   collage: "LPU",
//   rollno: "35",
// getBMI: () => {
//     console.log(2,100);
// console.log(this.height);  //this function is not use in arro => function
// },

//   getBMI: function () {
//     // console.log(2,100);
//     // console.log(this.height,this.weight);
//     const bmiperson = this.weight / (this.height * this.height);
//     // console.log("BMI : ",bmiperson);
//     console.log(`BMI for ${this.personname} is ${bmiperson}`);
//     if (bmiperson < 18.5) {
//       console.log("underweight");
//     } else if ((bmiperson, 25)) {
//       console.log("fit");
//     } else {
//       console.log("over");
//     }
//   },
// };

// person.getBMI();

// person.weight=90;

// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("allkey:",allKeys)
// const allValues = Object.keys(person);
// console.log("allValues",allValues);
// const allEntries = Object.keys(person);
// console.log("allEntries",allEntries);

// --------------------------------Dynamic------------------------

// --------------------------------------------------------------

const person1 = {
  personname: "jay",
  height: 6,
  weight: 60,
  collage: "LPU",
  rollno: "35",
};

const person2 = person1; //mutation

person2.personname = "Raj";
console.log("person1", person1);
console.log("person2", person2);

// -------------------------------------------
// const person1 = {
//   personname: "jay",
//   height: 6,
//   weight: 60,
//   collage: "LPU",
//   rollno: "35",
// };

// de-structure
// const { personname } = person1;
// console.log("-->", personname);
// const { weight, height } = person1;
// console.log("-->", weight, height);

//-----------------------------------------------------
// spread operator

// const person1 = {
//   personname: "jay",
//   height: 6,
//   weight: 60,
//   collage: "LPU",
//   rollno: "35",
// };
// const p2 = { ...person1 }; //spread operator create a copy but not a deep copy
// console.log(p2);
// --------------------------
// const person1 = {
//   personname: "jay",
//   height: 6,
//   weight: 60,
//   collage: "LPU",
//   rollno: "35",
//   marks: {
//     EVs: 42,
//     math: 45,
//   },
// };

// // const person2 = {
// //     personname:"jay",
// //     height:6,
// //     weight:60,
// //     collage:"LPU",
// //     rollno:"35",
// //     marks: {
// //         EVs:42,
// //         math:45,

// //     }
// // };

// const person2 = { ...person1 };
// person2.personname = "raj";

// person2.marks.math=49;

// console.log(person1.personname);
// console.log(person2.personname);
// console.log(person1.marks.math);
// console.log(person1.marks.math);
