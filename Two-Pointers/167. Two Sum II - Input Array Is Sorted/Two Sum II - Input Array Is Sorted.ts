function twoSum(numbers: number[], target: number): number[] {
	let left = 0;
	let right = numbers.length - 1;
    console.log(numbers);
    
	while (left < right) {
		const vl = numbers[left];
		const vd = numbers[right];
        const sum = vl + vd
		if (target === sum) {
			return [left + 1, right + 1];
		}

		if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
	return [0, 0];
}

// const twoSumIIR1 = twoSum([0,0,3,4], 0);
const twoSumIIR2 = twoSum([-1000,-1,0,1], 1);
// console.log(twoSumIIR1);
console.log(twoSumIIR2);
