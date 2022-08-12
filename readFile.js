const fs = require('fs')
 function sudokuChoose(num){

    if ((num <= 15) && (num > 0)) {
        let sudokuPuzzles= fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');
        const sudokus = sudokuPuzzles.map(el => el.split('')).slice(0, sudokuPuzzles.length - 1);
        let arra2 =[]
        let arra =[]
        for (let i1 = 0; i1 < sudokus.length; i1++) {
            arra = [];
            for (let i2 = 0; i2 < sudokus[i1].length;i2=i2+9) {
                arra.push(sudokus[i1].slice(i2,i2+9))
        }
        arra2.push(arra)
    }
        return arra2[num-1];
    } else {
        return 'Такого судоку нет';
    }
 }

 module.exports = sudokuChoose;
//  console.log(sudokuChoose(15));