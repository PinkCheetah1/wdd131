const PI = 3.14;
let radius = 3;
let area = radius * radius * PI;

console.log(area);

radius = 20;
console.log(area);


const one = 1;
const two = '2';
                    
// type coercion
let results = one * two;
console.log(results);
let result = one + Number(two);
console.log(result);


//scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    