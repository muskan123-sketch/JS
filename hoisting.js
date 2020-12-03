//This mechanism where variables and function can be used before declaring them is called hoisting in Javascript
num1=10;//it is assumed that default value before giving it a value is undefined
console.log(num1);
var num1;
str1="Demo string";
console.log(str1);
var str1;
//The variables and function declarations are moved to the top of their scope before cod eexecution  
