"use strict";

const hands = [
  "AA",
  "AKs",
  "AQs",
  "AJs",
  "ATs",
  "A9s",
  "A8s",
  "A7s",
  "A6s",
  "A5s",
  "A4s",
  "A3s",
  "A2s",
  "AKo",
  "KK",
  "KQs",
  "KJs",
  "KTs",
  "K9s",
  "K8s",
  "K7s",
  "K6s",
  "K5s",
  "K4s",
  "K3s",
  "K2s",
  "AQo",
  "KQo",
  "QQ",
  "QJs",
  "QTs",
  "Q9s",
  "Q8s",
  "Q7s",
  "Q6s",
  "Q5s",
  "Q4s",
  "Q3s",
  "Q2s",
  "AJo",
  "KJo",
  "QJo",
  "JJ",
  "JTs",
  "J9s",
  "J8s",
  "J7s",
  "J6s",
  "J5s",
  "J4s",
  "J3s",
  "J2s",
  "ATo",
  "KTo",
  "QTo",
  "JTo",
  "TT",
  "T9s",
  "T8s",
  "T7s",
  "T6s",
  "T5s",
  "T4s",
  "T3s",
  "T2s",
  "A9o",
  "K9o",
  "Q9o",
  "J9o",
  "T9o",
  "99",
  "98s",
  "97s",
  "96s",
  "95s",
  "94s",
  "93s",
  "92s",
  "A8o",
  "K8o",
  "Q8o",
  "J8o",
  "T8o",
  "98o",
  "88",
  "87s",
  "86s",
  "85s",
  "84s",
  "83s",
  "82s",
  "A7o",
  "K7o",
  "Q7o",
  "J7o",
  "T7o",
  "97o",
  "87o",
  "77",
  "76s",
  "75s",
  "74s",
  "73s",
  "72s",
  "A6o",
  "K6o",
  "Q6o",
  "J6o",
  "T6o",
  "96o",
  "86o",
  "76o",
  "66",
  "65s",
  "64s",
  "63s",
  "62s",
  "A5o",
  "K5o",
  "Q5o",
  "J5o",
  "T5o",
  "95o",
  "85o",
  "75o",
  "65o",
  "55",
  "54s",
  "53s",
  "52s",
  "A4o",
  "K4o",
  "Q4o",
  "J4o",
  "T4o",
  "94o",
  "84o",
  "74o",
  "64o",
  "54o",
  "44",
  "43s",
  "42s",
  "A3o",
  "K3o",
  "Q3o",
  "J3o",
  "T3o",
  "93o",
  "83o",
  "73o",
  "63o",
  "53o",
  "43o",
  "33",
  "32s",
  "A2o",
  "K2o",
  "Q2o",
  "J2o",
  "T2o",
  "92o",
  "82o",
  "72o",
  "62o",
  "52o",
  "42o",
  "32o",
  "22",
];

const body = document.body;
const grid = document.querySelector(".grid");

const hero = document.getElementById("hero-position");
let heroPosition = document.getElementById("hero-position").value;
let villainPosition = document.getElementById("villain-position").value;
const villain = document.getElementById("villain-position");
const bb = document.getElementById("bb-size");
const bbValue = document.getElementById("bb-size").value;

hands.forEach((hand, index) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.textContent = hand;
  grid.appendChild(cell);
  cell.id = index + 1;
  cell.setAttribute("hand", cell.textContent);
});

// if ((hero.value = "Button")) {
//   console.log(hero.value);
// }

// if ((villain.value = "Button")) {
//   console.log(villain.value);
// }

// if ((bb.value = 50)) {
//   console.log(bb.value);
// }
// hero.value == "Button"

// if (villain.value === "Big Blind") {
//   console.log("Success");
//   console.log(villain.value);
// }
const cell1 = document.getElementById(1);
console.log(cell1.getAttribute("hand"));

function selectionCheck() {
  console.log(heroPosition, villainPosition);
  let currentHero = heroPosition;
  // const currentHero = heroPosition;
  // const currentVillain = villainPosition;
  // console.log(currentHero);

  if (currentHero === "Big Blind") {
    console.log("Success");
  } else {
    console.log("Nope");
  }
}

cell1.addEventListener("click", selectionCheck);

const heroSelect = document.getElementById("hero-position");

//need to put the event listenre change on the Villain position select as well.
heroSelect.addEventListener("change", function () {
  console.log(
    "Position:",

    document.getElementById("hero-position").value
  );
  heroPosition = hero.value;
  villainPosition = villain.value;
  if (heroPosition == "Big Blind" && villainPosition == "Small Blind") {
    cell1.style.color = "blue";
  }
});

/* changes to make
- update values to change colors of the cells
- work out a forumla for lowering the shaded cells based on player number
gotta be an easier way to increase/decrease the cells without manually updating them for every value change
*/
