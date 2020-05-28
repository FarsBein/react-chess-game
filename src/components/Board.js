import React, { useState } from 'react'
import BoardCells from '../components/BoardCells'

import bKing from '../chessPieces/Chess_kdt60.png'
import wKing from '../chessPieces/Chess_klt60.png'
import bQueen from '../chessPieces/Chess_qdt60.png'
import wQueen from '../chessPieces/Chess_qlt60.png'
import bPawn from '../chessPieces/Chess_pdt60.png'
import wPawn from '../chessPieces/Chess_plt60.png'
import bKnight from '../chessPieces/Chess_ndt60.png'
import wKnight from '../chessPieces/Chess_nlt60.png'
import bBishop from '../chessPieces/Chess_bdt60.png'
import wBishop from '../chessPieces/Chess_blt60.png'
import bCastle from '../chessPieces/Chess_rdt60.png'
import wCastle from '../chessPieces/Chess_rlt60.png'

function Board({grid}) {
    const [board,setBoard] = useState(grid);
    const [currentAddress,setCurrentAddress] = useState([])
    const [pieces,setPieces] = useState({
        'bKing':bKing,
        'wKing':wKing,
        'bQueen':bQueen,
        'wQueen':wQueen,
        'bPawn':bPawn,
        'wPawn':wPawn,
        'bKnight':bKnight,
        'wKnight':wKnight,
        'bBishop':bBishop,
        'wBishop':wBishop,
        'bCastle':bCastle,
        'wCastle':wCastle
    });

    const addressDeCoder = (key) => {
        const column = key%10;
        const row = (key-column)/10;
        return [row,column]
    }

    const boxColor = (i,j) => {
        setCurrentAddress([i,j])
        if (i%2 === 0){
            if (j%2 === 0){
                return 'white'
            }
        } else {
            if (j%2 !== 0){
                return 'white' 
            }
        }
    }

    const handleDragStart = (e) => {
        console.log(e.target,[])
    }

    return (
        <div className='board-area'>
            <section className='board-container'>
                {board.map((row,i) =>
                        row.map((pieceName,j) => (
                            <div className={boxColor(i,j)}>
                                {pieceName !== 'none' ? <img draggable onDragStart={(e) => handleDragStart(e)} src={pieces[pieceName]} className='pieceImage' alt="a piece"/> : <div></div>}
                            </div>
                        ))
                    )}
            </section>
        </div>
    )
}

export default Board;

