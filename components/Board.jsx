import {useRef, useEffect} from 'react'

const Board = ({ numPlayers }) => {
    const canvasRef = useRef(null);
    let width, height;
    const sideLength = 50;
    const angleInRadians = (Math.PI * 2) / numPlayers;
    console.log("Angle", angleInRadians);

    const drawGame = (ctx) => {
        ctx.translate(width / 2,height / 2);
        drawBoard(ctx);
        for (let playerNumber = 0; playerNumber < numPlayers; playerNumber++) {
            drawPlayer(ctx, playerNumber);
        }
    }

    const drawBoard = (ctx) => {            
        ctx.beginPath();
        for (var i = 1; i <= numPlayers; i++) {
            ctx.lineTo(sideLength*Math.cos(angleInRadians*i),sideLength*Math.sin(angleInRadians*i));
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    const drawPoint = (ctx) => {
        ctx.beginPath();
        ctx.arc(2, 1, 1, 0, 2 * Math.PI, true);
        ctx.stroke();
    }

    const drawPlayer = (ctx, playerNumber) => {
        ctx.strokeStyle = '#ff0000';
        const vertex1X = sideLength * Math.cos(angleInRadians * playerNumber);
        const vertex1Y = sideLength * Math.sin(angleInRadians * playerNumber);

        const vertex2X = sideLength * Math.cos(angleInRadians * playerNumber + 1);
        const vertex2Y = sideLength * Math.sin(angleInRadians * playerNumber + 1);

        const slope = (vertex2Y - vertex1Y) / (vertex2X - vertex1X);
        const translationFactor = 2 * (slope > 0 ? 1 : -1);

        
        const quarterX = (vertex2X - vertex1X) / 4;
        const quarterY = slope * quarterX;
        ctx.beginPath();

        ctx.moveTo(vertex1X , vertex1Y);
        ctx.lineTo(vertex1X + quarterX, vertex1Y + quarterY);
        ctx.stroke();
    }

    useEffect(() => {
        if (canvasRef.current !== null) {
            width = canvasRef.current.width;
            height = canvasRef.current.height;
            const ctx = canvasRef.current.getContext("2d");
            drawGame(ctx);
        }
      }, [canvasRef]);

    return (
        <canvas ref={canvasRef} style={{width:"100vw",height:"100vh"}} id="board">

        </canvas>
    )
}

export default Board