const findEmptyAnya = require('findEmpty');
const validateYana = require('validate');
const inputKolya = require('readFile');


const solveSudoku = (sudoku) => {
    //размерность таблицы и размерность секторов
    const size = 9;
    const sectorSize = 3;


    // поиск незаполненных ячеек - Анина функция
    const findEmpty = findEmptyAnya;

    // проверка перебираемых в цикле solving значений на валидность - Яна
    const validate = validateYana;

    // решение
    const solving = () => {
        const currentPos = findEmpty(sudoku);

        if (currentPos === null) {
            return true;
        }

        // перебор всех чисел для пустых ячеек
        for (let i = 1; i < size + 1; i += 1) {
            const currentNumber = i.toString();
            const isValid = validate(currentNumber, currentPos, sudoku);

            // финал очка
            if (isValid) {
                const [x, y] = currentPos;
                sudoku[x][y] = currentNumber;

                if (solving()) {
                    return true;
                }

                sudoku[x][y] = '.';
            }
        }

        return false;
    }


    solving();

    return sudoku;
};

// console.log(sudoku(inputKolya(1)));