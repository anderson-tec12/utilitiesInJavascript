let query = 'P_116250-01/00 OR  116250-01/00  ';

let queryToArray = query.split('');

let queryProtect = [];

for (let i = 0; i < queryToArray.length; i++) {
  if (queryProtect[queryProtect.length - 1] == ' ' && queryToArray[i] == ' ') {
  } else {
    queryProtect.push(queryToArray[i]);
  }
}

console.log('Entrada', query);
console.log('===== Entrada ======');

console.log(queryProtect.join(''));
