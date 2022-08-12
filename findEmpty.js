const findEmpty = (sudoku) => {
for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
        if (sudoku[r][c] === '-') {
            return [r, c];
        }
    }
}
    return null;
};

module.exports = findEmpty;