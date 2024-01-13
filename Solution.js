
/*
 Interface BinaryMatrix is provided by leetcode.com
 Do not include the interface when running the code on the website.
 The comments below are from leetcode.com
 */
// This is the BinaryMatrix's API interface.
// You should not implement it, or speculate about its implementation
function BinaryMatrix() {
    /**
     * @param {number} row
     * @param {number} col
     * @return {number}
     */
    this.get = function (row, col) {};

    /**
     * @return {[number, number]}
     */
    this.dimensions = function () {};
}

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
    const NOT_FOUND = -1;
    let rows = binaryMatrix.dimensions()[0];
    let columns = binaryMatrix.dimensions()[1];

    let leftMostColumnWithOne = columns;

    for (let r = 0; r < rows; ++r) {
        for (let c = leftMostColumnWithOne - 1; c >= 0 && binaryMatrix.get(r, c) === 1; --c) {
            leftMostColumnWithOne = c;
        }
    }
    return leftMostColumnWithOne !== columns ? leftMostColumnWithOne : NOT_FOUND;
};
