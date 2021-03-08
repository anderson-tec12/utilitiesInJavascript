//array
const numerosIncompletos = [1, 2, 3, 4, 6, 7, 8, 9];
const numeroFaltante = 5;

const numerosCompletos = [
  ...numerosIncompletos.slice(0, 4),
  numeroFaltante,
  ...numerosIncompletos.slice(5, numerosIncompletos.length),
];
numerosCompletos.map((numero) => console.log(numero));
