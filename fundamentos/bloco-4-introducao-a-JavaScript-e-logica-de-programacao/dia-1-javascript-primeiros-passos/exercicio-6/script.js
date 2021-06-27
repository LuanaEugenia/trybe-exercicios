const PEAO = 'peao'
const TORRE = 'torre'
const CAVALO = 'cavalo'
const BISPO = 'bispo'
const RAINHA = 'rainha'
const REI = 'rei'
const peca = 'rei'

if (peca.toLocaleLowerCase() === PEAO) {
  console.log('Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.')
} else if (peca.toLocaleLowerCase() === TORRE) {
  console.log('Se movimentam em linha reta ou para os lados, por todas as casas.')
} else if (peca.toLocaleLowerCase() === CAVALO) {
  console.log('Se movimenta em L.')
} else if (peca.toLocaleLowerCase() === BISPO) {
  console.log('Se movimenta somente na diagonal por todo o tabuleiro.')
} else if (peca.toLocaleLowerCase() === RAINHA) {
  console.log('Pode se movimentar para qualquer lado e direção.')
} else if (peca.toLocaleLowerCase() === REI) {
  console.log('Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.')
} else {
  console.log('A peça informada é inválida.')
}
