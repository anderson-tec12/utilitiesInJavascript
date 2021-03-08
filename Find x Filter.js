const DATA = [
  {name: 'anderson',idade :27},
  {name: 'Mivane',idade :26},
  {name: 'Raphael',idade :7},
  {name: 'Davi',idade :5},
  {name: 'Gabriel',idade :3},
]

const maioresFind = DATA.find(valor => valor.idade >= 18)
const maioresFilter = DATA.filter(valor => valor.idade >= 18)


console.log(maioresFind)
console.log(maioresFilter)