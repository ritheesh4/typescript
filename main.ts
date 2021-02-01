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

//6. Tuple type for array of values mixed type
let person1: [string, number] = ['Ritheesh', 22];

//7. Enum type. Sometimes to store value as a nubmer in database. Using enum would be code friendly than just values.
// enum Color { Red, Green, Blue }
enum Color { Red = 5, Green, Blue }
let c: Color = Color.Green;
console.log(c)

//8. Any type. It encompasses values of every possible type and it does'nt force us to do any checking before we try to call or acces the value
let randomValue: any = 10;
randomValue = true;
randomValue = 'Ritheesh';

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

// function tail<T extends any[]>(arr: readonly [any, ...T]) {
//     const [_ignored, ...rest] = arr;
//     return rest;
//   }
  
//   const myTuple = [1, 2, 3, 4] as const;
//   const myArray = ["hello", "world"];
  
//   const r1 = tail(myTuple);
//   //    ^ = const r1: [2, 3, 4]
  
//   const r2 = tail([...myTuple, ...myArray] as const);
//   //    ^ = const r2: [2, 3, 4, ...string[]]