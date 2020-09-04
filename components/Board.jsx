import {useRef, useEffect} from 'react'

const Board = ({ numPlayers }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current !== null) {
            const ctx = canvasRef.current.getContext("2d");
            const width = canvasRef.current.width;
            const height = canvasRef.current.height;
            const sideLength = 50;
    
            var angleInRadians = ((Math.PI * 2)/numPlayers);
            ctx.beginPath();
            ctx.translate(width / 2,height / 2);
            ctx.moveTo(sideLength,0);
            for (var i = 1; i <= numPlayers; i++) {
                ctx.lineTo(sideLength*Math.cos(angleInRadians*i),sideLength*Math.sin(angleInRadians*i));
            }
            ctx.closePath();
            ctx.stroke();
        }
      }, [canvasRef]);

    return (
        <canvas ref={canvasRef} style={{width:"100%",height:"100%"}} id="board">

        </canvas>
    )
}

export default Board