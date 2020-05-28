import React, { useState } from 'react'
import BoardCells from '../components/BoardCells'



function Board() {
    const [grid,setGrid] = useState([]);
    
    const newGame = () => {
        let tempGrid =[]
        for (let i= 0; i < 8;i++){
            tempGrid.push([])
            for (let j=0; j<8;j++){
                i === 1 ? tempGrid[i].push('bPawn'):
                i === 6 ? tempGrid[i].push('wPawn'):
                i === 0 && (j === 0 || j === 7) ? tempGrid[i].push('bCastle'):
                i === 7 && (j === 0 || j === 7) ? tempGrid[i].push('wCastle'):
                i === 0 && (j === 2 || j === 5) ? tempGrid[i].push('bBishop'):
                i === 7 && (j === 2 || j === 5) ? tempGrid[i].push('wBishop'):
                i === 0 && (j === 4) ? tempGrid[i].push('bQueen'):
                i === 7 && (j === 4) ? tempGrid[i].push('wQueen'):
                i === 0 && (j === 3) ? tempGrid[i].push('bKing'):
                i === 7 && (j === 3) ? tempGrid[i].push('wKing'):
                i === 0 && (j === 1 || j === 6) ? tempGrid[i].push('bKnight'):
                i === 7 && (j === 1 || j === 6) ? tempGrid[i].push('wKnight'):
                tempGrid[i].push('none')
            }
        }
        setGrid(tempGrid)
    }

    return (
        <div className='board-area'>
            <section className='board-container'>
                {grid.map((row,i) =>
                    row.map((pieceName,j) => (
                        <BoardCells key={i*10+j} squareKey={i*10+j} piece={pieceName}/>
                    ))
                )}
            </section>
            <div >
                <button onClick={newGame}>
                    New Game
                </button>
            </div>
        </div>
    )
}

export default Board;

