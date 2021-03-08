const numero = "40.001.100,00";
const BD = "51000.60";

const exchangePointsForCommas = (value) => {
  let newValue = "";
  const helper = "¬";
  newValue = value
    .replace(/\./g, helper)
    .replace(/\,/g, ".")
    .replace(helper, ",");
  // console.log(p1);
  return newValue;
};
const exchangeCommasForPoints = (value) => {
  let newValue = "";
  const helper = "¬";
  newValue = value
    .replace(/\,/g, helper)
    .replace(/\./g, ",")
    .replace(helper, ".");
  // console.log(p1);
  return newValue;
};

// console.log(exchangePointsForCommas(numero));
console.log(exchangeCommasForPoints(numero));
//console.log(applyPointsAndCommas(BD));
console.log(BD.toLocaleString("pt-br", { minimumFractionDigits: 2 }));
