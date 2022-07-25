const students = [
        {id:105, name: "alamin"},
        {id:209, name: "rofiq"},
        {id:111, name: "raju"},
        {id:205, name: "idris"}
];
// const newStudent = [];

// for(let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     newStudent.push(element);
// }
// console.log(newStudent);

const name = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id < 150);
const biggerOne = students.find(x => x.id < 150)
console.log(biggerOne);