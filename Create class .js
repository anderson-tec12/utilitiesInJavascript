class Pessoa {
  nome;
  idade;
  documento;

  constructor(nome, idade, documento) {
    this.documento = documento;
    this.idade = idade;
    this.nome = nome;
  }
}

let person1 = new Pessoa("Anderson", 27, "xxxxxxx");
let person2 = new Pessoa("Mivane", 27, "xxxxxxx");
console.log(person1);
console.log(person2);
person1.idade = 28;

console.log(person1);
