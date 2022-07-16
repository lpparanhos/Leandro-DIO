const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 3.0, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 5.0));