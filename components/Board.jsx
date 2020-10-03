import {useRef, useEffect} from 'react'
//import { handleKeyDown, handleUserClick } from '../eventlistners/userinput';
import Game from '../src/Game';

const Board = ({ numPlayers }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        //document.addEventListener("keydown", handleKeyDown);
        if (canvasRef.current !== null) {
            const game = new Game(8, canvasRef.current);     
            game.draw();
        }
      }, [canvasRef]);

    return (
        <canvas ref={canvasRef} style={{width:"100vw",height:"100vh"}} id="board">

        </canvas>
    )
}

export default Board