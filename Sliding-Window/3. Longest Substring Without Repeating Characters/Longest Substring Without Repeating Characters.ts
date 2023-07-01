function lengthOfLongestSubstring1(s: string): number {
    if (!s.length) {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }
    
    let longest = 0;
    let curr: string[] = []
    let pl = 0;
    let pr = pl+1;
    curr.push(s.charAt(pl));

    while (pl < s.length && pr < s.length) {
        console.log("CURR STATUS", curr)
        const c = s.charAt(pr);

        if (curr.includes(c)) {
            const l = curr.length
            if (l > longest) {
                longest = l
            }

            pl += curr.findIndex((b) => b === c) + 1;
            pr = pl+1;
            curr = [];
            curr.push(s.charAt(pl))
        } else {
            curr.push(c)
            pr += 1
        }
        console.log("CURR END", curr)
    }

    return longest;
};

function lengthOfLongestSubstring2(s: string): number {
    let l = 0;
    let set = new Set();
    let res = 0;

    for (let r of s) {
        while (set.has(r)) {
            set.delete(s[l]);
            l++;
        }

        set.add(r);
        res = Math.max(res, set.size)
    }

    return res;
};


const r1 = lengthOfLongestSubstring2(" ");
console.log(r1);