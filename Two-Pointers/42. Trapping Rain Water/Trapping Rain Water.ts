function trap(height: number[]): number {
    if (!height.length) {
        return 0;
    }
    
    let water = 0;
    let l = 0;
    let r = height.length - 1;
    let maxL = height[l];
    let maxR = height[r];
    while (l < r) {
        console.log(l, r);
        
        if (maxL <= maxR) {
            l++;
            const toAdd = -(height[l]) + maxL;
            water += toAdd > 0 ? toAdd : 0;
            maxL = Math.max(maxL, height[l]);
        } else {
            r--;
            const toAdd = -(height[r]) + maxR;
            water += toAdd > 0 ? toAdd : 0;
            maxL = Math.max(maxR, height[r]);
        }
    }

    return water;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])