
//arrays part two
console.clear()
var nfr=['sh','he','she','me','you','none']
nfr.splice(3,0,'Donna','Rachel')
//1st tells where to start
//2nd tells how many to be deleted
//3rd and 4th tells what items to be added
console.log(nfr)
nfr.splice(0,0,'Harvey')
console.log(nfr)
nfr.splice(2,1)
console.log(nfr)
nfr.splice(0,2)
console.log(nfr)
//concatenation we use .concat
var noff=['nina','priya','jahnvi','kriti','preeti']
var nall=nfr.concat(noff)
console.log(nall)
//sorting in ascending order or descending order
nall.sort()
console.log(nall)
nall.reverse()
console.log(nall)
console.log('==============================================')
function check_common_element(arra1, arra2) {
  for (let i = 0; i < arra1.length; i++)
  {
    if (arra2.includes(arra1[i]))
      return true;
  }
  return false;
}
console.log(check_common_element([4,11,12,23,46,65,70,73,98], [7,13,25,46,58,70,function is_monotonous(num) {
  function is_monotonous(num) {
      if (num.length === 1) {
          return true;
      }
      var num_direction = num[1] - num[0];
      for (var i = 0; i < num.length - 1; i++) {
          if (num_direction * (num[i + 1] - num[i]) <= 0) {
              return false;
          }
      }
      return true;
  }
  console.log(is_monotonous([1, 2, 3]));
  console.log(is_monotonous([1, 2, 2]))
  console.log(is_monotonous([-3, -2, -1]))
