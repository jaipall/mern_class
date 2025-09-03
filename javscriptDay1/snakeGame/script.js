const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

const snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 },
  { x: 60, y: 100 },
];

// window.snake = snake;

const move = { x: square, y: 0 };
// let food_x = -1;
// let food_y = -1;

// const foods = [
//   { x: 120, y: 100 },
//   { x: 200, y: 100 },
//   { x: 160, y: 100 },
// ];

let food = {
  x: Math.floor(Math.random() * (board.width / square)) * square,
  y: Math.floor(Math.random() * (board.height / square)) * square,
};

let score = 0;

function draw_rect(part) {
  ctx.fillStyle = "green";
  ctx.strokeStyle = "black";
  ctx.fillRect(part.x, part.y, square, square);
  ctx.strokeRect(part.x, part.y, square, square);
}

function draw_snake() {
  snake.forEach(draw_rect);
}

function draw_food() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, square, square);
}

function draw_score() {
  document.getAnimations("score").getContext = score;
}

function clear_canvas() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
  ctx.strokeRect(0, 0, board.width, board.height);
}

function moveSnake() {
  const head = {
    x: snake[0].x + move.x,
    y: snake[0].y + move.y,
  };

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    draw_score();
    food = {
      x: Math.floor(Math.random() * (board.width / square)) * square,
      y: Math.floor(Math.random() * (board.height / square)) * square,
    };
  } else {
    snake.pop();
  }
}

function checkCollision() {
  const head = window.snake[0];

  if (head.x > board.width || head.y > board.height) {
    window.gameOver = true;
  }

  for (let i = 1; i < window.snake.length; i++) {
    if (window.snake[i].x === head.x) {
      window.gameOver = true;
    }
  }
}

function showGameOver() {
  if (!ctx) return;
  ctx.fillStyle = "black";
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Game over", board.width / 2, board.height / 2);
}
document.addEventListener("Keydown", registerMove);

// function random_food(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min) * square;
// }

// function gen_food() {
//   let valid = false;
//   while (!valid) {
//     food_x = random_food(0, board.width / square - 1);
//     food_y = random_food(0, board.height / square - 1);
//     valid = !snake.some((part) => part.x === food_x && part.y == food_y);
//   }
//   window.food_x = food_x;
//   window.food_y = food_y;
// }

// function drawFood() {
//   ctx.fillStyle = "red";
//   ctx.strokeStyle = "brown";
//   ctx.fillRect(food_x, food_y, square, square);
//   ctx.strokeRect(food_x, food_y, square, square);
// }

function registerMove(e) {
  const curr = window.move;
  if (e.key === "ArrowUp" && curr.y === 0) window.move = { x: 0, y: -square };
  if (e.key === "ArrowDown" && curr.y === 0) window.move = { x: 0, y: square };
  if (e.key === "ArrowLeft" && curr.x === 0) window.move = { x: -square, y: 0 };
  if (e.key === "ArrowRight" && curr.x === 0) window.move = { x: square, y: 0 };
}
window.gameOver = false;

function main() {
  setTimeout(() => {
    clear_canvas();
    // if (food_x === -1 && food_y === -1) gen_food();
    moveSnake();
    checkCollision();
    draw_snake();
    // drawFood();
    main();
  }, 100);
}

window.snake = snake;
window.main = main;
window.moveSnake = moveSnake;
window.clear_canvas = clear_canvas;
window.registerMove = registerMove;
window.checkCollision = checkCollision;
window.board = board;
window.ctx = ctx;
// window.drawFood = drawFood;
// window.gen_food = gen_food;
// window.food_x = food_x;
// window.food_y = food_y;
window.move = window.move;
window.food = food;
window.score = score;

draw_score();
main();
