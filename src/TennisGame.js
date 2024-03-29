//https://dojopuzzles.com/problems/partida-de-tenis/ resolvendo o desafio

class TennisGame {
  constructor() {
    this.pontuacao = { jogador1: 0, jogador2: 0 };
  }
  marcarPonto(jogador) {
    if (jogador === 1) {
      this.pontuacao.jogador1 += 15;
    } else if (jogador === 2) {
      this.pontuacao.jogador2 += 15;
    }
  }
  vencedorDoGame() {
    if (this.pontuacao.jogador1 === 40 && this.pontuacao.jogador2 < 40) {
      return 'Jogador 1';
    } else if (this.pontuacao.jogador2 === 40 && this.pontuacao.jogador1 < 40) {
      return 'Jogador 2';
    } else if (this.pontuacao.jogador1 >= 40 && this.pontuacao.jogador2 >= 40 &&this.pontuacao.jogador1 === this.pontuacao.jogador2) {
      return 'Empate';
    } else if (this.pontuacao.jogador1 > 40 && this.pontuacao.jogador2 === this.pontuacao.jogador1 + 30) {
      return 'Jogador 2';
    } else if (this.pontuacao.jogador2 > 40 && this.pontuacao.jogador1 === this.pontuacao.jogador2 + 30) {
      return 'Jogador 1';
    } else {
      return null;
    }
  }
}
module.exports = TennisGame; 
//npm init -y
//npm i -D jest
//npm test
