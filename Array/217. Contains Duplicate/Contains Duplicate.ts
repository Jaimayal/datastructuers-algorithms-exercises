// 217. LeetCode Easy. Contains Duplicate

// First approach. Uses a HashMap probably not the best solution. Takes O(n) at worst
// function containsDuplicate(nums: number[]): boolean {
// 	const map = new Map<number, number>();

// 	for (let i = 0; i < nums.length; i++) {
// 		if (map.has(nums[i])) {
// 			return true;
// 		} else {
// 			map.set(nums[i], 1);
// 		}
// 	}

// 	return false;
// }

// Second approach. Uses a Set to remove duplicate elements. Probably takes around O(1)
function containsDuplicate(nums: number[]): boolean {
	return new Set(nums).size !== nums.length;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
