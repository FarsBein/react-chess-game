
export const isMovePossible = (x1,x2,y1,y2,pieceName,pieceColor) => {


    if (pieceName === 'Pawn' && pieceColor === 'w') {
        if (y2 + 1 === y1){ //2//
            if (x2  === x1 || x2+1 === x1 || x2-1 === x1){
                return true
            }
        }
        if (y1 === 6 && y2 + 2 === y1){ // check for first move
            return true
        }
    }

    else if (pieceName === 'Pawn' && pieceColor === 'b') {
        if (y2-1 === y1){
            if (x2 === x1 || x2+1 === x1 || x2-1 === x1){
                return true;
            }
        }
        if(y1 === 1 && y2 - 2 === y1){ // check for first move
            return true;
        }
    }
    
    
    else if (pieceName === 'Castle'|| pieceName === 'Queen'){
        if (x1 === x2 || y1 === y2) {
            return true
        }
    }
    else if (pieceName === 'Bishop'|| pieceName === 'Queen'){
        if (Math.abs(x1 -x2) === Math.abs(y1-y2)){ //1//
            return true
        }
    }

    else if (pieceName === 'King'){
        if (x2 + 1 === x1  || x2 - 1 === x1  || x2 === x1 ){
            if(y2 + 1 === y1 || y2 - 1 === y1 || y2 === y1){
                return true
            }
        }
    }
    else if (pieceName === 'Knight'){
        if (x2-3 === x1  || x2+3 === x1 ){//1//
            if (y2-1 === y1 || y2+1 === y1){//2//
                return true
            }
        }
        if (y2-3 === y1 || y2+3 === y1){//3//
            if (x2-1 === x1  || x2+1 === x1 ){//4//
                return true
            }
        }
    }

    return false
}

export const isMoveBlocked = (x1,x2,y1,y2,pieceName,pieceColor,Board) => {

    if (Board[x2][y2][0] === pieceColor){ // same color pieces
        return false
    }

    //Pawn
    if (pieceName === 'Pawn' && Math.abs(x1-x2)>1){
        if (pieceColor === 'w'){
            return Board[x1-1][y1][0] === 'none'
        }
        if (pieceColor === 'b'){
            return Board[x1+1][y1][0] === 'none'
        }
    }

    //Castle
    if (pieceName === 'Castle' || (pieceName === 'Queen'&&(x1 === x2 || y1 === y2))){
        if (x1 === x2 && y1-y2 > 0) {
            for(let i=1; i<=y1-y2 ;i++){
                if (Board[x1-i][y1-i][0] === pieceColor){ // same color pieces
                    return false
                }
            } 
        }
        else if (x1 === x2 && y2-y1 > 0) {
            for(let i=1; i<=y2-y1 ;i++){
                if (Board[x1+i][y1+i][0] === pieceColor){ // same color pieces
                    return false
                }
            } 
        }
        else if (y1 === y2 && x1-x2> 0) {
            for(let i=1; i<=x1-x2 ;i++){
                if (Board[x1-i][y1-i][0] === pieceColor){ // same color pieces
                    return false
                }
            } 
        }
        else if (y1 === y2 && x2-x1> 0) {
            for(let i=1; i<=x2-x1 ;i++){
                if (Board[x1+i][y1+i][0] === pieceColor){ // same color pieces
                    return false
                }
            } 
        }
    }

    //Bishop
    if (pieceName ==='Bishop' || pieceName === 'Queen'){
        let direction = x1-x2
        if (direction < 0){
            for (let i=1;i<=Math.abs(x1-x2);i++){
                if (Board[x1-i][y1-i][0] === "w"){
                    return false
                }
            }              
        }else {
            for (let i=1;i<=Math.abs(x1-x2);i++){
                if (Board[x1+i][y1+i][0] === "w"){
                    return false
                }
            }    
        }

    }

}

export const isValid = (oldPosition, newPosition, Board) => {
    const x1 = oldPosition[0];
    const y1 = oldPosition[1];
    const x2 = newPosition[0];
    const y2 = newPosition[1];

    const pieceName = Board[x1][y1].slice(1)
    const pieceColor = Board[x1][y1][0]

    return (
            isMovePossible(x1,x2,y1,y2,pieceName,pieceColor) &&
            isMoveBlocked(x1,x2,y1,y2,pieceName,pieceColor,Board)
        )
}