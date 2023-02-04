// 242. LeetCode Easy. Valid Anagram

function getWordDecomposition(s: string): Map<string, number> {
	const map = new Map<string, number>();

	for (const letter of s.split("")) {
		let letterOccurrences = map.get(letter);
		if (letterOccurrences) {
			map.set(letter, ++letterOccurrences);
		} else {
			map.set(letter, 1);
		}
	}

	return map;
}

function isAnagram(s: string, t: string): boolean {
	const map1 = getWordDecomposition(s);
	const map2 = getWordDecomposition(t);

	if (map1.size !== map2.size) {
		return false;
	}

	for (const [key, value] of map1) {
		if (!map1.has(key)) {
			return false;
		} else {
			if (value !== map2.get(key)) {
				return false;
			}
		}
	}

	return true;
}

// Test cases
console.log(isAnagram("aa", "a"));
