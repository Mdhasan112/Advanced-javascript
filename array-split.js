const nums = [5, 30, 50, 1, 4, 6, 5]
const part = nums.slice(2, 4);
// console.log(part)

const removed = nums.splice(2,3)
// console.log(removed);
// console.log(nums);

const together = nums.join("next ");
console.log(together);