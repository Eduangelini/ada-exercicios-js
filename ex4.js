const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]

const alunosComMedia = alunos.map((aluno) => {
  const somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0);
  const media = somaNotas / aluno.notas.length;

  return {
    nome: aluno.nome,
    media: media.toFixed(2)
  }
})

console.log(alunosComMedia)