export { };
let message = "Hello World";
console.log(message);

let x = 10;
const y = 20;


//1. Let declartions can be used without initial value but const can not
let sum;
const title = 'Title';

//2. How to assign type to the variables
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Ritheesh';

let sentence: string = `My name is ${name}`
console.log(sentence)

//3. Declarations of null and undefined
let n: null = null;
let u: undefined = undefined;

//4. Boolean and string with null and undefined
let isNew: boolean = null;
let myName: string = undefined;

//5. Array declarations
let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];