
import java.util.List;

/*
Interface BinaryMatrix is provided by leetcode.com
Do not include the interface when running the code on the website.
The comments below are from leetcode.com
 */
// This is the BinaryMatrix's API interface.
// You should not implement it, or speculate about its implementation
interface BinaryMatrix {

    public int get(int row, int col);

    public List<Integer> dimensions();
};

public class Solution {

    private static final int NOT_FOUND = -1;

    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        int rows = binaryMatrix.dimensions().get(0);
        int columns = binaryMatrix.dimensions().get(1);

        int leftMostColumnWithOne = columns;

        for (int r = 0; r < rows; ++r) {
            for (int c = leftMostColumnWithOne - 1; c >= 0 && binaryMatrix.get(r, c) == 1; --c) {
                leftMostColumnWithOne = c;
            }
        }
        return leftMostColumnWithOne != columns ? leftMostColumnWithOne : NOT_FOUND;
    }
}
