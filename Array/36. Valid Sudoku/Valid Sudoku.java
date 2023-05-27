import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution4 {
    public boolean isValidSudoku(char[][] board) {
        if (!hasValidRows(board)) {
            System.out.println("Invalid rows");
            return false;
        }
        
        if (!hasValidCols(board)) {
            System.out.println("Invalid cols");
            return false;
        }
        
        if (!hasValidSquares(board)) {
            System.out.println("Invalid sqrs");
            return false;
        }
        

        return true;
    }

    private boolean hasValidRows(char[][] board) {
        for (int i = 0; i < board.length; i++) {
            Set<Character> chars = new HashSet<>();
            int total = 0;
            for (char cs : board[i]) {
                if (cs != '.') {
                    chars.add(cs);
                    total++;
                }
            }

            if (chars.size() != total) {
                System.out.println(chars);
                return false;
            } 
        }

        return true;
    }

    private boolean hasValidCols(char[][] board) {
        for (int col = 0; col < board.length; col++) {
            Set<Character> uniques = new HashSet<>();
            int total = 0;
            for (int row = 0; row < 9; row++) {
                if (board[row][col] != '.') {
                    total++;
                    uniques.add(board[row][col]);
                }
            }
            if (total != uniques.size()) {
                return false;
            }
        }

        return true;
    }

    private boolean hasValidSquares(char[][] board) {
        for (int xdelta = 0; xdelta < board.length; xdelta+=3) {
            for (int ydelta = 0; ydelta < board.length; ydelta+=3) {
                Set<Character> uniques = new HashSet<>();
                int total = 0;
                System.out.println(uniques);
                System.out.println("valid");
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        if (board[i+xdelta][j+ydelta] != '.') {
                            System.out.println("Added " + board[i+xdelta][j+ydelta]);
                            total++;
                            uniques.add(board[i+xdelta][j+ydelta]);
                        }
                    }
                }

                if (total != uniques.size()) {
                    System.out.println(uniques);
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Solution4 solution = new Solution4();
        char[][] board = {{'8','3','.','.','7','.','.','.','.'}
                        ,{'6','.','.','1','9','5','.','.','.'}
                        ,{'.','9','8','.','.','.','.','6','.'}
                        ,{'8','.','.','.','6','.','.','.','3'}
                        ,{'4','.','.','8','.','3','.','.','1'}
                        ,{'7','.','.','.','2','.','.','.','6'}
                        ,{'.','6','.','.','.','.','2','8','.'}
                        ,{'.','.','.','4','1','9','.','.','5'}
                        ,{'.','.','.','.','8','.','.','7','9'}};
        
        boolean isValid = solution.isValidSudoku(board);
        System.out.println(isValid);

        char[][] board2 = {{'5','3','.','.','7','.','.','.','.'}
                        ,{'6','.','.','1','9','5','.','.','.'}
                        ,{'.','9','8','.','.','.','.','6','.'}
                        ,{'8','.','.','.','6','.','.','.','3'}
                        ,{'4','.','.','8','.','3','.','.','1'}
                        ,{'7','.','.','.','2','.','.','.','6'}
                        ,{'.','6','.','.','.','.','2','8','.'}
                        ,{'.','.','.','4','1','9','.','.','5'}
                        ,{'.','.','.','.','8','.','.','7','9'}};

        boolean isValid2 = solution.isValidSudoku(board2);
        System.out.println(isValid2);
    }


}