// arr = Array.prototype
/*
Syntax - Array.isArray(arr)
@param - Object 
@return - boolean 
*/

// Array.isArray(myObj);
let testArray = ["Mango bite", "Apple", "Banana", "Lichi", 21, 34]
// 2 . Pop - Removes one element from last 

/*
Syntax - arr.pop()
@param - index (optional)
@return - Removed element  
*/

// testArray.pop();
// console.log(testArray.pop());

//3.  push - add element at the last of an array 

/*
Syntax - arr.push(value)
@param - value - any
@return - length of array
*/
// console.log(testArray.push(35));

// 4. Shift - Removes one element from beginning
/*
Syntax - arr.shift()
@param - NA
@return - Updated length of array
*/
// console.log(testArray.shift());



//5. unshift - Add one element from beginning
/*
Syntax - arr.unshift(Value)
@param - any
@return - Updated length of array
*/
// console.log(testArray.unshift({ "Veg": "Jackfruit" }));


// 6. splice - Remove / Add multiple elements at any given position
/*
Syntax - arr.splice(start index,number of elements to be removed, *opt - Added items )
@param - number, number, any
@return -  Array of removed value
*/

// console.log(testArray.splice(2));

// console.log(testArray)

//7. 
/*NON-Mutator
Syntax - arr.splice(start index,number of elements to be removed )
@param - number, number
@return -  A copy of the array * (Won't change the original array)
*/


console.log(testArray.slice(0))
console.log(testArray)

//8.  reverse()
/*
Syntax - arr.reverse()
@param - NA
@return -  Array object (Reversed)
*/

console.log(testArray.reverse())

//9.  fill()
/*
Syntax - arr.fill(Value )
@param -  number
@return -  Array object (With new value)
*/
console.log(testArray.fill("Potato"))

//9.  sort()
/* 
Syntax - arr.sort()
@param -  number
@return -   original array reference | now sorted
*/
testSortArray = [1, 2, 34, 5, 675, 3.2, 534];
testSortArray.sort()

console.log(testSortArray)

