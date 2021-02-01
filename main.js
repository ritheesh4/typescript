"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
//1. Let declartions can be used without initial value but const can not
var sum;
var title = 'Title';
//2. How to assign type to the variables
var isBeginner = true;
var total = 0;
var name = 'Ritheesh';
var sentence = "My name is " + name;
console.log(sentence);
//3. Declarations of null and undefined
var n = null;
var u = undefined;
//4. Boolean and string with null and undefined
var isNew = null;
var myName = undefined;
//5. Array declarations
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
//6. Tuple type for array of values mixed type
var person1 = ['Ritheesh', 22];
//7. Enum type. Sometimes to store value as a nubmer in database.
// enum Color { Red, Green, Blue }
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
