# typescript
- TypeScript knows the JavaScript language and will generate types for you in many case
- Typescript is a superset developed and maintained by Myscrosoft. 
- It follows a strict syntactical superset of JavaScript
- TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript 
- Open-source porgramming language from Microsoft
- Typed suprtset of JavaScript
- Compiles down to plain JavaScript

Why?
- Relation JavaScript
- Opitonal static typing and type inference
- IDE support
- Rapid growth and use

TypeScript compiler
- tsc 
- Redeclaration error comes when if there is no import and export. Instead of delcaring the file as module, it will
  consider and script. To avoid such typescript error, which should use import and export.
- Typescript file gets transfiled into javacript file.

Variable Declarations
---------------------
- let variables can be declared and initialised bu const should need a value from the moment it declares.

Variable Types
--------------
- let varialbe-name:variable-type = variable-value;
  example: let name:string = 'Ritheesh';
- Tuple type: Sometimes me might have an array that contains values of mixed types. Using Tuple can contain
  different array type values with matched indexes.

  example: let person1: [string, number] = ['Ritheesh', 22]; Number of elements in the arrays are fixed. Fixed number of values with different types.

