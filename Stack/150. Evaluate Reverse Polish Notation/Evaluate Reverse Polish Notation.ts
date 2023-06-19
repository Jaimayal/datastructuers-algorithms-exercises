function evalRPN(tokens: string[]): number {
    const s: any[] = []
    for (const token of tokens) {
        console.log(token);
        if (!Number.isNaN(Number.parseInt(token))) {
            s.push(Number.parseInt(token))
        } else {
            const v2 = s.pop();
            const v1 = s.pop();
            let expr = v1 + token + v2;
            console.log(expr);
            const vi = eval(expr)
            const v3 = Math.trunc(vi)
            s.push(v3);
        }
    }
    return s.pop();
};


const evalrpn1 = evalRPN(["2","1","+","3","*"]);
const evalrpn2 = evalRPN(["0","3","/"]);
console.log(evalrpn1, evalrpn1 === 9);
console.log(evalrpn2, evalrpn2 === 0);
