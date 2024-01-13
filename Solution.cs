
using System;
using System.Collections.Generic;

/*
Interface BinaryMatrix is provided by leetcode.com
The comments below are from leetcode.com
*/
// This is BinaryMatrix's API interface.
// You should not implement it, or speculate about its implementation
class BinaryMatrix
{
    public int Get(int row, int col) { }
    public IList<int> Dimensions() { }
}

class Solution
{
    private static readonly int NOT_FOUND = -1;
    public int LeftMostColumnWithOne(BinaryMatrix binaryMatrix)
    {
        int rows = binaryMatrix.Dimensions()[0];
        int columns = binaryMatrix.Dimensions()[1];

        int leftMostColumnWithOne = columns;

        for (int r = 0; r < rows; ++r)
        {
            for (int c = leftMostColumnWithOne - 1; c >= 0 && binaryMatrix.Get(r, c) == 1; --c)
            {
                leftMostColumnWithOne = c;
            }
        }
        return leftMostColumnWithOne != columns ? leftMostColumnWithOne : NOT_FOUND;
    }
}
