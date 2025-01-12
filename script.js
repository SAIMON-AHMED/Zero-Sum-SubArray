// Time -> O(n) | Space -> O(n)
function zeroSumSubarray(nums) {

  let len = nums.length;
  if (len === 0) return false;
  
  let sumObj = {0: true};
  let currentSum = 0;
  for (let i = 0; i < len; i++) {
    currentSum += nums[i];
    if (sumObj.hasOwnProperty(currentSum)) return true;
    sumObj[currentSum] = true;
  }
  
  return false;
}


