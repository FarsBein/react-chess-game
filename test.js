let testList = []

for (let i= 0; i < 8;i++){
    testList.push([])
    for (let j=0; j<8;j++){
        i === 1 ? testList[i].push('bPawn') :
        i === 6 ? testList[i].push('wPawn') :
        i === 0 && (j === 0 || j === 7) ? testList[i].push('bCastle'):
        i === 7 && (j === 0 || j === 7) ? testList[i].push('wCastle'):
        i === 0 && (j === 2 || j === 5) ? testList[i].push('bBishop'):
        i === 7 && (j === 2 || j === 5) ? testList[i].push('wBishop'):
        i === 0 && (j === 4) ? testList[i].push('bQueen'):
        i === 7 && (j === 4) ? testList[i].push('wQueen'):
        i === 0 && (j === 3) ? testList[i].push('bKing'):
        i === 7 && (j === 3) ? testList[i].push('wKing'):
        i === 0 && (j === 1 || j === 6) ? testList[i].push('bKnight'):
        i === 7 && (j === 1 || j === 6) ? testList[i].push('wKnight'):
        testList[i].push(['none'])
    }
}

let printString =''
for (let i=0; i< 8; i++){
    printString =''
    for (let j=0; j< 8; j++){
        printString += testList[i][j] + ' '
    }
    //console.log(printString)
}


const st = 'string'
console.log(st[0])
