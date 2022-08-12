const validate = (number, position, sudoku) => {
    const [r, c] = position;
​
    // проверка числа на уникальность в строке, колонке и секторе
    // проверка на строки
    for (let i = 0; i < size; i += 1) {
        if (sudoku[i][c] === number && i !== r) {
            return false;
        }
    }
    // проверка на колонки
    for (let i = 0; i < size; i += 1) {
        if (sudoku[r][i] === number && i !== c) {
            return false;
        }
    }
    // проверка сектора
    const sectorRow = Math.floor(r / sectorSize) * sectorSize;
    const sectorCol = Math.floor(c / sectorSize) * sectorSize;
    for (let i = sectorRow; i < sectorRow + sectorSize; i += 1) {
        for (let j = sectorCol; j < sectorCol + sectorSize; j += 1) {
            if (sudoku[i][j] === number && i !== r && j != c) {
                return false;
            }
        }
    }
    return true;
}

module.exports = validate;