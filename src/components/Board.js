import React, { useState, useRef } from 'react'

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

import {isValid} from '../MoveChecker'

function Board() {
    const [grid,setGrid] = useState([]);
    const [isDragging, setIsDragging] = useState(false)
    const [isSelecting, setIsSelecting] = useState(false)
    const [inGame,setInGame] = useState(false)
    const dragPiece = useRef()
    const dragNode = useRef()
    const oldBoard = useRef(grid)

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
        setInGame(true)
    }

    const handleDragStart = (e,currentIndex) => {
        dragPiece.current = currentIndex
        console.log('Drag Start',currentIndex)
        setIsDragging(true)
    }

    const handleDragEnd = (e) => {
        let tempGrid = [...grid]
        const oldPosition = dragPiece.current
        const newPosition = dragNode.current
        console.log("Drag end",oldPosition,newPosition)
        setIsDragging(false)
        setIsSelecting(false)
        if ((oldPosition[0] !== newPosition[0] || oldPosition[1] !== newPosition[1])) { // for some reason (oldPosition !== newPosition) doesn't work
            oldBoard.current = JSON.parse(JSON.stringify(grid))
            tempGrid[newPosition[0]][newPosition[1]] = tempGrid[oldPosition[0]][oldPosition[1]]
            tempGrid[oldPosition[0]][oldPosition[1]] = "none"
            console.log('moved')   
        }
        // dragPiece.current = null
        // dragNode.current = null
    }

    const handleDragEnter = (e,address) => {
        console.log('Drag Enter',address)
        dragNode.current = address
    }

    const boxColor = (boxKey) => {
        let className = 'black' 
        if (boxKey[0]%2 === 0){
            if (boxKey[1]%2 === 0){
                className = 'white' 
            }
        } else {
            if (boxKey[1]%2 !== 0){
                className = 'white' 
            }
        }
        return className
    }

    const pieceImage = (piece) => {
        if (piece === 'bPawn') return bPawn
        if (piece === 'wPawn') return wPawn
        if (piece === 'bCastle') return bCastle
        if (piece === 'wCastle') return wCastle
        if (piece === 'bBishop') return bBishop
        if (piece === 'wBishop') return wBishop
        if (piece === 'bQueen') return bQueen
        if (piece === 'wQueen') return wQueen
        if (piece === 'bKing') return bKing
        if (piece === 'wKing') return wKing
        if (piece === 'bKnight') return bKnight
        if (piece === 'wKnight') return wKnight
    } 

    const goBack = () => {
        setGrid(oldBoard.current)
        console.log('moved back')
    }

    const handleTouchStart = (e,currentIndex) => {
        const x = currentIndex[0]
        const y = currentIndex[1]
        if (!isSelecting && grid[x][y] !== 'none'){
            console.log('touched',currentIndex)
            dragPiece.current = currentIndex
            setIsSelecting(true)            
        } 
        else if (isSelecting){
            dragNode.current = currentIndex
            handleDragEnd()
        }
    }
    return (
        <div className='board-area'>
            <div>
                <section className={'board-container-new-game'}>
                    {grid.map((row,i) =>
                        row.map((pieceName,j) => (
                            <div 
                                key={i*10+j}
                                className={boxColor([i,j])} 
                                onTouchStart={(e) => handleTouchStart(e,[i,j])}
                                onDragEnter={isDragging ? (e)=>handleDragEnter(e,[i,j]):
                                null}>
                                {
                                    pieceName !== 'none' ? 
                                    <img draggable 
                                    onDragStart={(e) => handleDragStart(e,[i,j])} 
                                    onDragEnd={(e) => handleDragEnd(e,[i,j])}
                                    src={pieceImage(pieceName)} 
                                    className={'piece-image'} alt="a piece"/> : 
                                    <div></div>
                                }
                            </div>
                        ))
                    )}
                </section>
                <div className='buttons'>
                    <button onClick={newGame}>
                        New Game
                    </button>
                    <button onClick={goBack}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Board;

