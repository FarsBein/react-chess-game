import React, { useState, useRef } from 'react'
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

function BoardCells ({handleDragEnter,squareKey,piece,grid,handleDragStart,handleDragEnd,keyDeCoder,isDragging}) {
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



    return (
        <div className={className}>
           {
            piece !== 'none' ? 
            <img draggable 
            onDragStart={(e) => handleDragStart(e,keyDeCoder(squareKey))} 
            onDragEnd={(e) => handleDragEnd(e,keyDeCoder(squareKey))}
            onDragEnter={isDragging ? (e)=>handleDragEnter(e,keyDeCoder(squareKey)):null}
            src={pieces[piece]} 
            className={'piece-image'} alt="a piece"/> : 
            <div></div>
            }
        </div>
    )
}

export default BoardCells;
