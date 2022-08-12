const findEmpty = (sudoku) => {
for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
        if (sudoku[r][c] === '.') {
            return [r, c];
        }
    }
}
    return null;
};

module.exports = findEmpty;