function threeSum(arr, target) {
// write your code here
	let resSum = arr[0]+arr[1]+arr[2];
	let minDiff = Number.MAX_VALUE;

	for(let i = 0 ; i < arr.length-2;i++){

		let left  = i+1;
		let right  = arr.length-1;

		while(left < right){

			let sum = arr[i] + arr[left] + arr[right];

			if(sum === target){
				return target;
			}
			else if(sum < target){
				left++;
			}else{
				right--;
			}

			let diffTarget = Math.abs(resSum - sum);
			if(diffTarget < minDiff){
				resSum = sum;
				minDiff = diffTarget;
			}
			
		}
	}
	return resSum;
  
}

module.exports = threeSum;
