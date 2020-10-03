import {sideLength} from './Utils';

class Player {
    constructor(ctx, playerNumber, angleInRadians) {
      this.ctx = ctx;
      this.playerNumber = playerNumber;
      this.angleInRadians = angleInRadians;
      this.moveOffset = 0;
    }

    draw() {
        this.ctx.strokeStyle = '#ff0000';
        const playerSideLength = sideLength(this.ctx) * 0.9;

        const x1 = playerSideLength * Math.cos(this.angleInRadians * this.playerNumber);
        const y1 = playerSideLength * Math.sin(this.angleInRadians * this.playerNumber);


        const x2 = playerSideLength * Math.cos(this.angleInRadians * (this.playerNumber + 1));
        const y2 = playerSideLength * Math.sin(this.angleInRadians * (this.playerNumber + 1));        
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);

        const slope = (y2 - y1) / (x2 - x1);
        const x3 = x1 + ((x2 - x1) * 0.5);
        const y3 = y1 + ((y2 - y1) * 0.5);
        this.ctx.lineTo(x3, y3);
        this.ctx.stroke();
    }
}

export default Player;