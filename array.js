console.clear()
 var nfriends=['Shaw','Muskan','shravan']
 console.log(nfriends)
 //arrays are special type of objects which can be accessed through position rather then the keys
 console.log(nfriends[2])
 //update the list
 nfriends[0]="Shawn"
 console.log(nfriends)
 nfriends[nfriends.length]='Rob'
 //bcoz we wanna add at the position just after the last element
 console.log(nfriends)
 //inbuilt function is push
 nfriends.push('Jack')
 console.log(nfriends)
 //delete a value
 var dname=nfriends.pop()
 console.log(dname)
console.log(nfriends)
//
var ar= ['asdf', 'sd', 'something','right','position']
console.log("longest string in array : "+ar[2])
var arr=[NaN, 0, 15, 'false', -22, '','undefined', 47, 'null',94]
arr.splice(-10,1)
arr.splice(-9,1)
arr.splice(-7,1)
arr.splice(-5,1)
arr.splice(-4,1)
arr.splice(-2,1)
console.log(arr)
 var arr2=[1, 3, 6, 2, 5, 10]
 var arr3=[]
 arr3.push(arr2[0])
 arr3.push(arr2[2])
 arr3.push(arr2[4])
 console.log(arr3)
 var arr4=[]
 arr4.push(arr2[1])
 arr4.push(arr2[3])
 arr4.push(arr2[5])
 console.log(arr4)
 var arr5=[]
 function check_common_element(arra1, arra2) {
   for (let i = 0; i < arra1.length; i++)
   {
     if (arra2.includes(arra1[i]))
       return true;
   }
   return false;
 }
 console.log(check_common_element([1,2,3], [3,4,5]));
 console.log(check_common_element([1,2,3], [5,6,7]));
