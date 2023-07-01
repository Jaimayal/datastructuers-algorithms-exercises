function maxProfit(prices: number[]): number {
    if (!prices.length) {
        return 0;
    }

    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]

        if (price < minPrice) {
            minPrice = price;
            continue;
        }
        
        const currentProfit = price - minPrice;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
    }

    return maxProfit;
};
