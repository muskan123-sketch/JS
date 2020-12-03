console.clear();
var num1=3;
var num2=4;
var num3=5;
var sum=num1+num2+num3;
console.log(sum);
var firstNum=10;
console.log(firstNum);
//Came case
//rules for naming js variables
//-Name can contain letters,digits,_and $
//-name cannot start with a digit
//-name can start with an _ or $
//-names are case sensitive
var x,X;
//-Names cannot be reserved keywords
var divbyzero=num1/0;
console.log(divbyzero);
console.log(typeof(divbyzero));
//JS NUMBER FUNCTIONS
 //tostring() number as input and returns a tostring
 console.log(num1.toString());
 var num4="10"
 //parseint() string numeral as input and returns a Number
 console.log(parseInt(num4));
 var num5="10.5"
 //parseFloat() string numeral as input and returns a Number
 console.log(parseFloat(num5));
 var str3="ABC"
 console.log(parseInt(str3));
 //toFixed()  takes floating number and rounds it off to a given position
 var strfloat=87.98765;
 console.log(strfloat.toFixed(2))
 var doublequotesstring="This is a \"Javascript\" string"
 console.log(doublequotesstring)
 //if we are using single quotes in a string then wrap it with double quotes and vice-versa
//inbuilt string FUNCTIONS
var mystr="My name is muskan"
console.log(mystr.indexOf('muskan'))
console.log(mystr.indexOf('My'))
console.log(mystr.lastIndexOf('My'))
//get a part of our string slice(start,end)
console.log(mystr)
//get a part of our string slice(start,end)
console.log(mystr.slice(5))
var str1="i am so enthusiastic"
console.log(mystr.concat('',str1))
//string function part-2
//trim removes extra spaces
var extraspacestring1='     mystring   '
console.log(extraspacestring1.trim())
//charAt():-this returns integer as an argument and returns character at that position
console.log(str1.charAt(5))
console.log(str1.split(' '))
//if the string is separated by commas then we will pass commas in the parenthesis
//NULL AND UNDEFINED
 var b2
 console.log(b2)
 b2=null
 console.log(b2)
//If else statements
if(3>5){
  console.log(true)
}
else{
  console.log(false )
}
var length=200;
var breadth=200;
if(length==breadth){
  console.log(true)
}
else{
  console.log(false)
}
var num11=5,num22=8,num33=20;
if(num11>num22 && num11>num33)
{
  console.log('num11 is greatest')
}
else if(num22>num11 && num22>num33) {

  console.log('num22 is greatest')
}
else{
  console.log('num33 is greatest')
}
var numOfItemPurchased=11
var cost=numOfItemPurchased*100
if(cost>1000){
  var discount=0.1*cost
  var total=cost-discount
  console.log(total)

}
else {
  console.log('no discount')
}
