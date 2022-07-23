const numbers = [8, 7, 10, 15, 5]
const output = [];

for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);