
// n = [1,2,4,-1,6,2,5,7,-5,0]
function findMaxSum(n) {
    maxSum = n[0]
    tempSum = n[0]
    tempIndex = 0
    startIndex = 0
    endIndex = 0

    for (let i = 1; i < n.length; i++) {
        if (n[i] > tempSum + n[i]) {
            tempSum = n[i]
            tempIndex = i
        } else {
            tempSum += n[i]
        }

        if (tempSum > maxSum) {
            maxSum = tempSum
            startIndex = tempIndex
            endIndex = i
        }
    }

    return {
        maxSum: maxSum,
        start: startIndex,
        end: endIndex
    }
}

const r = findMaxSum([4, -1, 2, -2, 5, -3, 4, -1, -2, 3, -1, 2, -5, 6])
console.log(r)

// 2, -1, 3, -4, 5, -1, 2 = 4: 6 => 
// 4, -1, 2, -2, 5, -3, 4, -1, -2, 3, -1, 2, -5, 6  = 4:6
3,
max = 4
i = 0