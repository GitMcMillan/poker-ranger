"use strict";
const body = document.body;
const cardBox = document.querySelector(".grid");

for (let i = 0; i < 169; i++) {
  const theDiv = document.createElement("div");
  theDiv.textContent = "AA";
  theDiv.className = "cell";

  cardBox.appendChild(theDiv);
}
