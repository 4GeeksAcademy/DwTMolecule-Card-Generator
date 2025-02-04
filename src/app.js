/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = [
    { name: "Corazones", symbol: "\u2665", class: "hearts" },
    { name: "Diamantes", symbol: "\u2666", class: "diamonds" },
    { name: "Picas", symbol: "\u2660", class: "spades" },
    { name: "Tréboles", symbol: "\u2663", class: "clubs" }
  ];

  function generateCard() {
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuitNumber = Math.floor(Math.random() * suits.length);

    let finalCardNumber = cardNumber[randomCardNumber];
    let finalSuit = suits[randomSuitNumber];

    document.getElementById(
      "topLeft"
    ).innerHTML = `${finalCardNumber} ${finalSuit.symbol}`;
    document.getElementById("center").innerHTML = `${finalSuit.symbol}`;
    document.getElementById(
      "bottomRight"
    ).innerHTML = `${finalCardNumber} ${finalSuit.symbol}`;

    let cardElement = document.getElementById("card");
    cardElement.className = "card " + finalSuit.class;
  }

  generateCard();
};
