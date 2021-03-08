const DATA = [
  {name: 'anderson',idade :27},
  {name: 'Mivane',idade :26},
]

const resultadoPadrao = DATA.find( valor => valor.idade > 26)

const resultadoBoolean = !!DATA.find( valor => valor.idade > 26)

const resultadoBoolean2 = Boolean(DATA.find( valor => valor.idade > 26))

console.log(resultadoPadrao)
console.log(resultadoBoolean)
console.log(resultadoBoolean2)