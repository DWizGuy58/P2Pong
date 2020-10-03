class PongBall{

    // Empty constructor on the ball 
    constructor(ctx, x, y, radius, velocityX, velocityY, width=4, height=4) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.width = width;
        this.height = height;
    }

    // Update the game position going vertical & diagonal at a constant point
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    // TODO - update directory
    changeX() {
        
    }

    // TODO FIX ABILITY TO ACCESS THE CANVAS
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(
        this.x,
        this.y,
        this.radius, 
        0, 
        2 * Math.PI, 
        false
      );
      this.ctx.fillStyle = 'green';
      this.ctx.fill();
      this.ctx.stroke();
      this.update();
    }
}

export default PongBall;