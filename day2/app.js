//Arrow function

// const printBill = function (txt) {
//     console.log("---------------");
//     console.log("Rs.",txt);
//     console.log("----------------");
// };
// printBill(100);

// const printBill = (txt) => {
//     console.log("---------------");
//     console.log("Rs.",txt);
//     console.log("----------------");
// };
// // printBill(100);

// const calculateBillAmountForFood = (price) => {
//     return price*1.05;
// };

// const calculateBillForDrinks = (price) => {
//     return price*1.2;
// };

// const calcuateBillForClothes = (price) => {
//     return price*1.12;
// };

// const totalcalculation = (food, cloths, drinks) => {
//     const foodAmount=calculateBillAmountForFood(food);
//     const clothsAmount=calcuateBillForClothes(cloths);
//     const drinksAmount=calculateBillForDrinks(drinks);

//     const finalAmounnt=foodAmount+clothsAmount+drinksAmount;
//     printBill(finalAmounnt);
// }

// totalcalculation(100,400,200);

//----------------------------------------------------
const printBillForAll = (txt) => {
  console.log("---------------");
  console.log("Rs.", txt);
  console.log("----------------");
};
// printBill(100);

const printBillForFood = (txt) => {
  console.log("---------------");
  console.log("Your Bill for Food");
  console.log("Rs.", txt);
  console.log("----------------");
};

const printBillForFoodAndDrinks = (txt) => {
  console.log("---------------");
  console.log("Your bill for Food and Drinks");
  console.log("Rs.", txt);
  console.log("----------------");
};

const calculateBillAmountForFood = (price) => {
  return price * 1.05;
};

const calculateBillForDrinks = (price) => {
  return price * 1.2;
};

const calcuateBillForClothes = (price) => {
  return price * 1.12;
};

// Higer Order funcion -->
// The function which accept another funnction as a parameter Or return a function;
const totalcalculation = (food, cloths, drinks, cb) => {
  const foodAmount = calculateBillAmountForFood(food);
  const clothsAmount = calcuateBillForClothes(cloths);
  const drinksAmount = calculateBillForDrinks(drinks);

  const finalAmounnt = foodAmount + clothsAmount + drinksAmount;
  // printBill(finalAmounnt);
  cb(finalAmounnt);
};

// totalcalculation(100,400,200);
totalcalculation(100, 400, 200, printBillForAll);
totalcalculation(100, 0, 200, printBillForFoodAndDrinks);
totalcalculation(100, 0, 0, printBillForFood);
