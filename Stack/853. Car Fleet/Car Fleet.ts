function carFleet(target: number, position: number[], speed: number[]): number {
    const sorted = Object.entries(position).sort((a, b) => a[1] - b[1]);
    const s: any[] = []
    while (sorted.length) {
        const entry = sorted.pop() as any
        const idx = Number(entry[0])
        const pos = entry[1]
        const spd = speed[idx]
        const time = (target - pos) / spd
        console.log(time);

        const top = s[s.length-1]
        s.push({
            index: entry[0],
            time,
        })
        if (top) {
            if (time <= top.time) {
                s.pop()
            }
        }
        console.log("STACk:", s);
    }

    console.log("FLEETS:", s.length);
    console.log("===================");
    
    return s.length
};

const r1 = carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])
const r2 = carFleet(10, [3], [3])
const r3 = carFleet(100, [0,2,4], [4,2,1])