const calculadora = require("./calc");
const prompt = require("prompt-sync")();

function options() {
  console.log(`
  
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  0 - sair
  `);
}

function optionSelected(option) {
  const num1 = Number(prompt("Digite numero 1: "));
  const num2 = Number(prompt("Digite numero 2: "));

  switch (option) {
    case 1:
      return calculadora.add(num1, num2);

    case 2:
      return calculadora.sub(num1, num2);

    case 3:
      return calculadora.mult(num1, num2);

    case 4:
      return calculadora.div(num1, num2);

    default:
      null;
      break;
  }
}

let option;
while (option != 0) {
  options();
  option = Number(prompt("Qual a opção? "));

  if (option > 0 && option <= 4) {
    const resultado = optionSelected(option);

    console.log(`O resultado é ${resultado}`);
  } 
}

console.log(`-----------------------\nVocê escolheu sair do sistema!`);
