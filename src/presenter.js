import sumar from "./sumador";
import multiplicar from "./multiplicar";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumarymultiplicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const targetButton = event.submitter.id;

  if (targetButton === "sumar-button") {
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  } else if (targetButton === "multiplicar-button") {
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }

  });