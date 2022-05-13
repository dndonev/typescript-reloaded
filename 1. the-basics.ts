let myNum: number = 5;

console.log(typeof myNum);

let myStringNumber: string = 'five';
// myNum = 'five';

console.log(typeof myNum);

const f: () => () => number = () => () => 5;

myNum = f()(); // f()() correctly invoked
console.log(typeof myNum);
