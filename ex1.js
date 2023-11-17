const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata']

function contarItensPorTipo(hotifrutis) {
  const frutas = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão']
  const legumes = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró']
  const verduras = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga']

  let frutasCount = 0;
  let legumesCount = 0;
  let verdurasCount = 0;

  for (let i = 0; i < hotifrutis.length; i++) {
    const item = hotifrutis[i]

    if (frutas.includes(item)) {
      frutasCount++;
    } else if (legumes.includes(item)) {
      legumesCount++;
    } else if (verduras.includes(item)) {
      verdurasCount++;
    }
  }

  return {
    frutas: frutasCount,
    legumes: legumesCount,
    verduras: verdurasCount
  }
}

const resultado = contarItensPorTipo(hotifrutis)
console.log(resultado)