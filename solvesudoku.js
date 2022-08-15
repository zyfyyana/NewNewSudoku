const findEmpty = require('./findEmpty');
const validate = require('./validate');
const inputKolya = require('./readFile');

const input = [
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ],

];

const solveSudoku = (sudoku) => {
    //размерность таблицы и размерность секторов
    // const size = 9;
    // const sectorSize = 3;


    // поиск незаполненных ячеек - Анина функция


    // проверка перебираемых в цикле solving значений на валидность - Яна


    // решение
    const solving = () => {
        const currentPos = findEmpty(sudoku);

        if (currentPos === null) {
            return true;
        }

        // перебор всех чисел для пустых ячеек
        for (let i = 1; i < 9 + 1; i += 1) {
            const currentNumber = i.toString();
            const isValid = validate(currentNumber, currentPos, sudoku);

            // финал очка
            if (isValid) {
                const [x, y] = currentPos;
                sudoku[x][y] = currentNumber;

                if (solving()) {
                    return true;
                }

                sudoku[x][y] = '-';
            }
        }

        return false;
    }


    solving();

    return sudoku;
};
console.log('\n\n***SUDOKU GAME SOLVE***\n');
// console.log(solveSudoku(inputKolya(1)).map(el => el.join('   ')).join('\n\n'));
console.log(solveSudoku(inputKolya(1))
.map((el) => el.join('')
.replace(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/, ' $1 $2 $3 | $4 $5 $6 | $7 $8 $9'))
.reduce((total, elem, i) => {
    if (i === 3 || i === 6) {
        total.push([' ------ ------- ------']);
    }
    return [...total, elem];
}, []).join('\n'));

console.log('\n *-*-*-*-*-*-*-*-*-*-*');