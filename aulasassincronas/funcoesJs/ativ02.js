function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade`;
}

const pessoa1 = {
  nome: "João",
  idade: 20,
};

const pessoa2 = {
  nome: "Maria",
  idade: 25,
};

const animal = {
    nome: "Jujuba",
    idade: 2,
    raca: "Poodle",
};

console.log(calculaIdade.apply(pessoa1, [7]));