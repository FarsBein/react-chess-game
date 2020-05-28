import React, { useState } from 'react'
import '../App.css'
import blackBushiop from '../chessPieces/Chess_bdt60.png'

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

function BoardCells ({squareKey,piece,grid}) {
    const [board,setBoard] = useState(grid)
    
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

    const keyDeCoder = (key) => {
        const column = key%10;
        const row = (key-column)/10;
        return [row,column]
    }

    let className = 'black' 
    let evenWhite = keyDeCoder(squareKey)[0] //if the row is even then we follow even -> white else odd -> white
    if (evenWhite%2 === 0){
        if (squareKey%2 === 0){
            className = 'white' 
        }
    } else {
        if (squareKey%2 !== 0){
            className = 'white' 
        }
    }

    const handleDragStart = (e) => {
        console.log(e.target,keyDeCoder(squareKey))
    }



    return (
        <div className={className}>
           {piece !== 'none' ? <img draggable onDragStart={(e) => handleDragStart(e)} src={pieces[piece]} className='pieceImage' alt="a piece"/> : <div></div>}
        </div>
    )
}

export default BoardCells;
