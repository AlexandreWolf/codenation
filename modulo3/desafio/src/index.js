"use strict";

const fibonacci = () => {
  const itemsFibonacci = [0, 1];
  while (itemsFibonacci[itemsFibonacci.length - 1] <= 350) {
    const lastTerm =
      itemsFibonacci[itemsFibonacci.length - 1] +
      itemsFibonacci[itemsFibonacci.length - 2];
    itemsFibonacci.push(lastTerm);
  }
  return itemsFibonacci;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
