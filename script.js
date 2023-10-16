function threeSum(arr, target) {
// write your code here
   arr.sort((a, b) => a - b);

    let closestSum = arr[0] + arr[1] + arr[2];
    let minDiff = Math.abs(target - closestSum);

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            let diff = Math.abs(target - sum);

            if (diff < minDiff) {
                minDiff = diff;
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
  
}

module.exports = threeSum;
