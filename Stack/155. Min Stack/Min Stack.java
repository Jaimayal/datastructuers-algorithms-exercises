class MinStack {
    private int latestElementIndex;
    private int[] elements;
    private int[] mins;
    private int minTracker;

    public MinStack() {
        this.elements = new int[5];
        this.mins = new int[5];
        this.latestElementIndex = -1;
        this.minTracker = Integer.MAX_VALUE;
    }

    public void push(int val) {
        latestElementIndex++;
        if (val < minTracker) {
            minTracker = val;
            this.mins[latestElementIndex] = val;
        } else {
            this.mins[latestElementIndex] = minTracker;
        }
        elements[latestElementIndex] = val;
    }

    public void pop() {
        mins[latestElementIndex] = 0;
        elements[latestElementIndex] = 0;
        latestElementIndex--;
        if (latestElementIndex < 0) {
            minTracker = Integer.MAX_VALUE;
        } else {
            minTracker = mins[latestElementIndex];
        }
    }

    public int top() {
        if (latestElementIndex < 0) {
            return 0;
        }

        return elements[latestElementIndex];
    }

    public int getMin() {
        if (latestElementIndex < 0) {
            return 0;
        }

        return mins[latestElementIndex];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */