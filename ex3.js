const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

function calcularIMC(pessoa) {
  const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
  return imc;
}

function mostrarIMC(pessoas) {
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const imc = calcularIMC(pessoa);
    console.log(`O IMC de ${pessoa.nome} é ${imc.toFixed(2)}`);
  }
}

mostrarIMC(pessoas)