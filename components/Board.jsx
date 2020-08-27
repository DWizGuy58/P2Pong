import UserBlock from "./UserBlock"

const Board = ({ numPlayers }) => {
    const interiorAngles = (numPlayers - 2) * 180 / numPlayers;
    const listPlayerSides = Array(numPlayers)
    for (let i = 0; i < listPlayerSides.length; i++) {
        listPlayerSides[i] = <UserBlock sideNum={i} />
    }

    return (
        <div style={{ width: 500, height: 500, border: "1px solid black", margin: 5 }}>
        </div>
    )
}

export default Board