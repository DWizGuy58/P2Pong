import Board from './Board';
import Player from './Player';

class Game {
  constructor(numPlayers=8, canvas) {
    this.canvas = canvas
    this.players = [];
    this.ctx = this.canvas.getContext("2d");
    const angleInRadians = (Math.PI * 2) / numPlayers;
    for (let player = 0; player < numPlayers; player++) {
      this.players.push(new Player(this.ctx, player, angleInRadians));
    }
    this.board = new Board(this.ctx, this.players); 
  }

  draw(){
    this.ctx.save();
    console.log("Draw Game");
    this.board.draw();
    this.ctx.restore();
  }
}

export default Game;