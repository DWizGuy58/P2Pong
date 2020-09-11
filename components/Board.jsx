import {useRef, useEffect} from 'react'

const Board = ({ numPlayers }) => {
    const canvasRef = useRef(null);
    let width, height;
    const sideLength = 50;
    const angleInRadians = (Math.PI * 2) / numPlayers;
    console.log("Angle", angleInRadians);

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
        const playerLength = sideLength * 0.9;

        const vertex1X = playerLength * Math.cos(angleInRadians * 0);
        const vertex1Y = playerLength * Math.sin(angleInRadians * 0);

        const vertex2X = playerLength * Math.cos(angleInRadians * 1);
        const vertex2Y = playerLength * Math.sin(angleInRadians * 1);

        const slope = (vertex2Y - vertex1Y) / (vertex2X - vertex1X);


        const quarterX = (vertex2X - vertex1X) / 4;
        const quarterY = slope * quarterX;
        ctx.beginPath();
        drawPoint(ctx);

        ctx.moveTo(vertex1X, vertex1Y);
        ctx.lineTo(vertex1X + quarterX, vertex1Y + quarterY);
        ctx.stroke();
    }

    const assignUserPiece = ({ctx, edgeSide}) => {
        if (drawPlayer) {
            
        }
    }

    useEffect(() => {
        if (canvasRef.current !== null) {
            width = canvasRef.current.width;
            height = canvasRef.current.height;
            const ctx = canvasRef.current.getContext("2d");
            ctx.translate(width / 2,height / 2);

            drawBoard(ctx);
            drawPlayer(ctx, 0);
        }
      }, [canvasRef]);

    return (
        <canvas ref={canvasRef} style={{width:"100vw",height:"100vh"}} id="board">

        </canvas>
    )
}

export default Board