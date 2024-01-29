function mincost(arr)
{ 
//write your code here
// return the min cost
	 if (!arr || arr.length === 0) return 0;
    arr.sort((a, b) => a - b);

    let minCost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();
        const combined = first + second;
        minCost += combined;
        let index = 0;
        while (index < arr.length && arr[index] < combined) {
            index++;
        }
        arr.splice(index, 0, combined);
    }

    return minCost;
}

module.exports=mincost;
