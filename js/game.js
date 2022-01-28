const hero = document.querySelector(".hero");
hero.style.top = "500px";
hero.style.left = "100px";

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

//variables used to add and subtract from the position
let heroHorizontal = 100;
let heroVertical = 500;
//hero moving right
document.addEventListener("keyup", (event) => {
  if (
    (event.code === "ArrowRight" || event.code === "KeyD") &&
    heroHorizontal !== 700
  ) {
    heroHorizontal += 100;
    hero.style.left = heroHorizontal + "px";
  }
});
//hero moving left
document.addEventListener("keyup", (event) => {
  if (
    (event.code === "ArrowLeft" || event.code === "KeyA") &&
    heroHorizontal !== 0
  ) {
    heroHorizontal -= 100;
    hero.style.left = heroHorizontal + "px";
  }
});
//hero moving up
document.addEventListener("keyup", (event) => {
  if (
    (event.code === "ArrowUp" || event.code === "KeyW") &&
    heroVertical !== 0
  ) {
    heroVertical -= 100;
    hero.style.top = heroVertical + "px";
  }
});
//hero moving down
document.addEventListener("keyup", (event) => {
  if (
    (event.code === "ArrowDown" || event.code === "KeyS") &&
    heroVertical !== 500
  ) {
    heroVertical += 100;
    hero.style.top = heroVertical + "px";
  }
});

const announcingWictory = () => {};
