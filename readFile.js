const fs = require('fs')
// function sudokuChoose(num){
    let sudokuPuzzles= fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');

//     let sudokuArr = sudokuPuzzles.map(el=>[el].replace('/.{1-9}/g', '')).slice(0,sudokuPuzzles.length-1)
console.log(sudokuPuzzles)

// for(let i1 = 0; i1 < sudokuArr.length; i1++){
//     for(let i2; i2 < sudokuArr[i1].length;i2++){

//     }
// }