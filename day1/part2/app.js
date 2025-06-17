// console.log("Hello JS");
// let juice=50;
// let gstOnJuice=0.1;
// let fries=70;
// let gstOnFood=0.05;

// let fruitcont=juice+juice*gstOnJuice;
// let frcnt=fries+fries*gstOnFood;

// console.log(fruitcont+frcnt);

//---------------------------
//function---------

// let age=34;
// console.log("START",age);

//funtion declaration
// function calculateJuiceBillAmount(juice,gstOnJuice) {//parameter
//     // let juice=50;
//     // let gstOnJuice=0.1;
//     let juiceBillAmount=juice+juice*gstOnJuice;
//     console.log(juiceBillAmount);
// }

// console.log("MID");/
// calculateJuiceBillAmount(60,0.1);
// calculateJuiceBillAmount(50,0.2);
// calculateJuiceBillAmount(110,0.3);


// function printBill(name,amount) {
//     console.log("-------------");
//     console.log("Your bill for",name);
//     console.log("Rs.",amount);
//     console.log("------------");
// }

// function calculateJuiceBillAmount(price,gst) {//parameter
//     // let juice=50;
//     // let gstOnJuice=0.1;
//     console.log("..calculate...");
//     let billAmount=price+price*gst;
//     // console.log(juiceBillAmount);
//     return billAmount;
// }

// const res1=calculateJuiceBillAmount(60,0.1);
// printBill("Mango Juice",res1);
// const res2=calculateJuiceBillAmount(50,0.2);
// printBill("Orange Juice",res2);
// const res3=calculateJuiceBillAmount(110,0.3);
// printBill("Fries",res3);




// const res1=calculateJuiceBillAmount(60,0.1);
// printBill("Mango Juice",res1);

// function printBill(name,amount) {
//     console.log("-------------");
//     console.log("Your bill for",name);
//     console.log("Rs.",amount);
//     console.log("------------");
// }

// function calculateJuiceBillAmount(price,gst) {//parameter
//     // let juice=50;
//     // let gstOnJuice=0.1;
//     console.log("..calculate...");
//     let billAmount=price+price*gst;
//     // console.log(juiceBillAmount);
//     return billAmount;
// }

// const res2=calculateJuiceBillAmount(50,0.2);
// printBill("Orange Juice",res2);
// const res3=calculateJuiceBillAmount(110,0.3);
// printBill("Fries",res3);

// function printBill(name,amount) {
//     console.log("-------------");
//     console.log("Your bill for",name);
//     console.log("$.",amount);
//     console.log("------------");
// }

//---------------------------------------------------------
// 2.
// printBill();//this now give error
//function assignemnt (named function)
// const printBill=function printBill(name,amount) {
//     console.log("-------------");
//     console.log("Your bill for",name);
//     console.log("Rs.",amount);
//     console.log("------------");
// };

//function assignemnt (named function)
// const calculateJuiceBillAmount=function calculateJuiceBillAmount(price,gst) {//parameter
//     // let juice=50;
//     // let gstOnJuice=0.1;
//     console.log("..calculate...");
//     let billAmount=price+price*gst;
//     // console.log(juiceBillAmount);
//     return billAmount;
// };

// const res1=calculateJuiceBillAmount(60,0.1);//argument
// printBill("Mango Juice",res1);
// const res2=calculateJuiceBillAmount(50,0.2);
// printBill("Orange Juice",res2);
// const res3=calculateJuiceBillAmount(110,0.3);
// printBill("Fries",res3);
//-------------------------------------------------------------------

// 3.
// printBill();//this now give error
//function assignemnt ( function)
const printBill=function (name,amount) {
    console.log("-------------");
    console.log("Your bill for",name);
    console.log("Rs.",amount);
    console.log("------------");
};

//function assignemnt (named function)
const calculateJuiceBillAmount=function (price,gst) {//parameter
    // let juice=50;
    // let gstOnJuice=0.1;
    console.log("..calculate...");
    let billAmount=price+price*gst;
    // console.log(juiceBillAmount);
    return billAmount;
};

const res1=calculateJuiceBillAmount(60,0.1);//argument
printBill("Mango Juice",res1);
const res2=calculateJuiceBillAmount(50,0.2);
printBill("Orange Juice",res2);
const res3=calculateJuiceBillAmount(110,0.3);
printBill("Fries",res3);