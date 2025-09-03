const sales = [
  { item: "Laptop", quantity: 2, price: 800 },
  { item: "Monitor", quantity: 1, price: 150 },
  { item: "Mouse", quantity: 4, price: 25 },
];

let s = 0;
function calculating() {
  sales.forEach((sale) => {
    s += sale.quantity * sale.price;
  });
  console.log(s);
}

calculating();

function gernatebill() {
  let grandtotal = 0;
  console.log("--Receipt--");
  sales.forEach((arr) => {
    let total = arr.price * arr.quantity;
    grandtotal += total;
    console.log(`${arr.item}:${arr.quantity}:${arr.price}:${total}`);
  });
  console.log(grandtotal);
}

gernatebill();

const products = [
  { product: "Laptop", stock: 5 },
  { product: "Headphones", stock: 0 },
  { product: "Smartphone", stock: 3 },
];

function checkStock() {
  products.forEach((arr) => {
    if (arr.stock == 0) {
      console.log(`${arr.product} are out of stock`);
    }
  });
}
checkStock();
