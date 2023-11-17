const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

const temSalarioMaiorOuIgual1500 = empregados.some((empregado) => empregado.salario >= 1500)

console.log(`Pelo menos um empregado tem salário maior ou igual a R$ 1.500,00? ${temSalarioMaiorOuIgual1500}`)

const temSalarioMenorOuIgual1000 = empregados.some((empregado) => empregado.salario <= 1000)

console.log(`Pelo menos um empregado tem salário menor ou igual a R$ 1.000,00? ${temSalarioMenorOuIgual1000}`)