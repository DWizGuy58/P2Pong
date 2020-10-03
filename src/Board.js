import PongBall from './PongBall';
import { sideLength } from './utils';

class Board {

  constructor(ctx, players) {
    this.players = players;
    this.ctx = ctx;
    this.angleInRadians = (Math.PI * 2) / players.length;

    this.ball = new PongBall(
      this.ctx,
      0,
      0,
      this.ctx.canvas.width / 100,
      Math.random() * 12, 
      Math.random() * 12,
      4,
      4
    );
  }

  centerBoard() {
    const width = this.ctx.canvas.width; 
    const height = this.ctx.canvas.height;
    this.ctx.translate(width / 2, height / 2);
  }

  drawBoard() {
    
    this.centerBoard();
    this.ctx.beginPath();
    this.players.forEach((player, index) => {
      this.ctx.lineTo(
        sideLength(this.ctx) * Math.cos(this.angleInRadians * index),
        sideLength(this.ctx) * Math.sin(this.angleInRadians * index)
      );
    });
    this.ctx.closePath();
    this.ctx.stroke();
  }

  draw() {
    console.log("Let draw this poop");
    this.drawBoard();

    // Ball creation
    this.ball.draw();

    // Player Creation
    this.players.forEach(player => {
      player.draw();
    });
  }         
}

export default Board;