import {useRef, useEffect} from 'react'
import { handleKeyDown, handleUserClick } from '../eventlistners/userinput';

const Board = ({ numPlayers }) => {
    const canvasRef = useRef(null);
    let width, height;
    const sideLength = 50;
    const angleInRadians = (Math.PI * 2) / numPlayers;

    const drawGame = () => {
        width = canvasRef.current.width;
        height = canvasRef.current.height;
        const ctx = canvasRef.current.getContext("2d");
        //ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2,height / 2);
        drawBoard(ctx);
        for (let playerNumber = 0; playerNumber < numPlayers; playerNumber++) {
            drawPlayer(ctx, playerNumber);
        }
        ctx.restore();
        //requestAnimationFrame(drawGame);
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
        const playerSideLength = sideLength * 0.9;
        //ctx.lineTo(sideLength*Math.cos(angleInRadians*i),sideLength*Math.sin(angleInRadians*i))

        const x1 = playerSideLength * Math.cos(angleInRadians * playerNumber);
        const y1 = playerSideLength * Math.sin(angleInRadians * playerNumber);

        const x2 = playerSideLength * Math.cos(angleInRadians * (playerNumber + 1));
        const y2 = playerSideLength * Math.sin(angleInRadians * (playerNumber + 1));        
        console.log(playerNumber, x1, y1, x2, y2);
        ctx.beginPath();
        ctx.moveTo(x1, y1);

        const slope = (y2 - y1) / (x2 - x1);
        const x3 = x1 + ((x2 - x1) * 0.5);
        const y3 = y1 + ((y2 - y1) * 0.5);
        //ctx.moveTo(x3, y3);



        //ctx.moveTo(vertex1X, vertex1Y);
        ctx.lineTo(x3, y3);
        ctx.stroke();
    }


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        if (canvasRef.current !== null) {     
            requestAnimationFrame(drawGame);
        }
      }, [canvasRef]);

    return (
        <canvas ref={canvasRef} style={{width:"100vw",height:"100vh"}} id="board">

        </canvas>
    )
}

export default Board