import java.util.ArrayList;
import java.util.List;

class Solution3 {
    public int longestConsecutive(int[] nums) {
        List<Integer> numbers = new ArrayList<Integer>();
        for (int i : nums) {
            numbers.add(i);
        }
        
        numbers.sort((o1, o2) -> o1 - o2);
        System.out.println(numbers);
        int max = 0;
        int currentMax = 0;
        Integer v = null;
        for (int i = 0; i < nums.length; i++) {
            if (i == 0) {
                v = numbers.get(i);
                currentMax++;
            } else {
                if (v+1 == numbers.get(i)) {
                    v = numbers.get(i);
                    currentMax++;
                } else if (v == numbers.get(i)) {
                    continue;
                } else {
                    v = numbers.get(i);
                    currentMax = 1;
                }
            }
            
            if (currentMax > max) {
                max = currentMax;
            }
        }

        return max;
    }

    public static void main(String[] args) {
        Solution3 solution = new Solution3();
        int r1 = solution.longestConsecutive(new int[]{100,4,200,1,3,2});
        int r2 = solution.longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1});
        int r3 = solution.longestConsecutive(new int[]{9,1,4,7,3,-1,0,5,8,-1,6});

        System.out.println(r1);
        System.out.println(r2);
        System.out.println(r3);
    }
}