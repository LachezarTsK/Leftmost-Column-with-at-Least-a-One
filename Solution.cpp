
#include <vector>
using namespace std;

/*
Interface BinaryMatrix is provided by leetcode.com
The comments below are from leetcode.com
 */
// This is the BinaryMatrix's API interface.
// You should not implement it, or speculate about its implementation

class BinaryMatrix {
public:
    int get(int row, int col);
    vector<int> dimensions();
};

class Solution {
    
    static const int NOT_FOUND = -1;
    
public:
    int leftMostColumnWithOne(BinaryMatrix& binaryMatrix) const {
        size_t rows = binaryMatrix.dimensions()[0];
        size_t columns = binaryMatrix.dimensions()[1];

        int leftMostColumnWithOne = columns;

        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = leftMostColumnWithOne - 1; c != variant_npos && binaryMatrix.get(r, c) == 1; --c) {
                leftMostColumnWithOne = c;
            }
        }
        return leftMostColumnWithOne != columns ? leftMostColumnWithOne : NOT_FOUND;
    }
};
