const numbers = [3, 4, 5, 8, 9, 6, 2]
const output = [];
for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

               //or

const result = numbers.map(function(element) {
    return element * element;
})
console.log(result);

                //or
const result2 = numbers.map(x => x * x);
console.log(result2);

             //map filter
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);




// const numbers = [8, 7, 10, 15, 5]
// const output = [];

// // for(let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i];
// //     const result = element * element;
// //     output.push(result);
// // }

// function square (element) {
//     return element * element;
// }
// numbers.map(function(element) {
//     console.log(element, index, array)
// })
// // console.log(element);

