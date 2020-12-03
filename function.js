console.clear()
function mSum(){
   var num1=10;
   var num2=20;
   var sum=num1+num2;
   //console.log(sum);
   return sum
}
//mSum()//calling a function wrt to line 6
console.log(mSum())//whenever the function is called i returns the value sum
//adding another Value
var totalSum=100+mSum()
console.log(totalSum)
var num11=20;//global variable
function sum(num2){
  console.log(num1+num2);
}
sum(20)//answer will be 30
