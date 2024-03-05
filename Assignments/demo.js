/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;
    let res = nums.forEach((ele)=>{
        if(sum+ele < 0){
            sum = ele;
            return ele;
        }
        else{
            sum+=ele;
        }
        Math.max(max,ele);
        console.log(sum,max);
    });
    console.log(res);
    return res
};
let nums = [-2,1,-3,4,-1,2,1,-5,4];
let ans = maxSubArray(nums);
console.log(ans);