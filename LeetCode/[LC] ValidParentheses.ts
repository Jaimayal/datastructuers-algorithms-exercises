// 20. Valid Parentheses. TypeScript. LeetCode
// [{()}]
function isValid(s: string): boolean {
	const symbols = new Map([
		["(", ")"],
		["{", "}"],
		["[", "]"],
	]);
	const chars = s.split("");
	const pending: string[] = [];

	for (const char of chars) {
		if (symbols.has(char)) {
			pending.push(symbols.get(char) || "");
		}

		const last = pending.pop();

		if (char !== last) {
			return false;
		}
	}

	return pending.length === 0;
}
