const hero = document.querySelector(".hero");
hero.style.top = "500px";
hero.style.left = "100px";

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

const background = document.querySelector(".map");

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
    announcingVictory();
    announcingDefeat();
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
    announcingVictory();
    announcingDefeat();
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
    announcingVictory();
    announcingDefeat();
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
    announcingVictory();
    announcingDefeat();
  }
});

//function that announces victory
const announcingVictory = () => {
  if (
    hero.style.top === treasure.style.top &&
    hero.style.left === treasure.style.left
  ) {
    background.innerHTML = "<p class='message'>You won!</p>";
  }
};

//function that announces defeat
const announcingDefeat = () => {
  if (
    hero.style.top === ghost.style.top &&
    hero.style.left === ghost.style.left
  ) {
    background.innerHTML = "<p class='message'>You lost!</p>";
  }
};
