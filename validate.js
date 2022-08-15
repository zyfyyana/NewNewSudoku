const validate = (number, position, sudoku) => {
    const [r, c] = position;
    // проверка числа на уникальность в строке, колонке и секторе
    // проверка на строки
    for (let i = 0; i < 9; i += 1) {
        if (sudoku[i][c] === number && i !== r) {
            return false;
        }
    }
    // проверка на колонки
    for (let i = 0; i < 9; i += 1) {
        if (sudoku[r][i] === number && i !== c) {
            return false;
        }
    }
    // проверка сектора
    const sectorRow = Math.floor(r / 3) * 3;
    const sectorCol = Math.floor(c / 3) * 3;
    for (let i = sectorRow; i < sectorRow + 3; i += 1) {
        for (let j = sectorCol; j < sectorCol + 3; j += 1) {
            if (sudoku[i][j] === number && i !== r && j != c) {
                return false;
            }
        }
    }
    return true;
}

module.exports = validate;