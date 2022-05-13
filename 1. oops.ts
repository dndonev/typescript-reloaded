

let myNumber = 5;
console.log(typeof myNumber); // number

const myStringNumber = 'five';
// myNumber = 'five';
console.log(typeof myNumber); // string

const f = () => 
    () => 5;
const myFunctionNumber = f()();
// myNumber = f();
console.log(typeof myNumber); // function
