function functionName(params) {
    console.log(params);
    return params;
}

// Anonyms 
const result = function (params) {
    console.log(params);
    return params;
}

// ES6 
const resultEs6 = (params) => {
    console.log(params);
    return params;
}


const resultEs6_0 = (params) => (params + 1);
const resultEs6_1 = params => params + 1;

// Array Iteration methods 
/**
 * foreach
 * for in
 * for of
 * map
 * filter
 * reduce
 * find
 * some
 * every
 * findindex
 */

let testArray = ["Mango bite", "Apple", "Banana", "Lichi"];

// TODO: prepend 'my ' before all elements.

// foreach
/**
 * Syntax - Array.prototype.forEach(callback);
 * @param :callback ->  element, index
 */

// testArray.forEach((element, index, array) => {
// console.log(`my ${element} \n ${array}`)
// })
// for in 
/**
 * Syntax - for(element in Array.prototype);
 * It returns indexes of elements
 */
// for (element in testArray) {
//     console.log(`my ${testArray[element]} \n`)
// }
// for (element of testArray) {
//     console.log(`my ${element} \n`)
// }

// map 

/**
 * Syntax - Array.prototype.map(callback);
 * @param :callback ->  element, index
 * @returns : A new array
 */

const newArrayResult = testArray.map((element) => {
    return `my ${element}`;
})

console.error(newArrayResult)
console.warn(testArray)

// filter 

/**
 * Syntax - Array.prototype.filter(callback);
 * @param :callback ->  element, index
 * @returns : A new array
 */

const vowelArray = testArray.filter((element) => {
    if (element.startsWith('A') || element.startsWith('E') || element.startsWith('I')) {
        return element;
    }
})

console.table(vowelArray);
console.table(testArray);

// Reduce 
/**
 * Syntax - Array.prototype.reduce(callback);
 * @param :callback ->  accum ,element, init
 * @returns : reduced array or Single value;
 */

const numArray = ["1", "2", "3", "5", "6", "7", "8", "9"];

// sum of odd numbers
const initialValue = 1
const sumOdd = numArray.reduce((accum, currentNumber,) => {
    // if (currentNumber % 2 != 0 || currentNumber == 1) {
    //     accum += currentNumber
    // }
    // return accum;
    console.log(accum)
    return currentNumber % 2 != 0 ? accum *= currentNumber : accum;
}, initialValue)

console.table({ sumOdd })

// PS: single string that is reduced version of `ArrayOfWords` where element starts with `s`
// const ArrayOfWords = ["shib", "vijay", "fozail", "sanjeev", "sujay", "Arijit"];

// const joinedRes = ArrayOfWords.reduce((ac, cV) => {
//     return cV.startsWith('s') ? ac += ` ${cV}` : ac;
// })

// console.table(joinedRes)


// findindex

/**
 * Syntax - Array.prototype.findIndex(callback);
 * @param :callback -> element, 
 * @returns : index: number;
 */
const ArrayOfWords = ["Shib", "vijay", "fozail", "sanjeev", "sujay", "Arijit"]

const index = ArrayOfWords.findIndex(element => element.startsWith('z'))

console.log({ index });

// find
/**
 * Syntax - Array.prototype.find(callback);
 * @param :callback -> element, 
 * @returns : 1st element match;
 */

console.log(ArrayOfWords.find((ele) => ele.startsWith('z')));

// some - any 
/**
 * Syntax - Array.prototype.some(callback);
 * @param :callback -> element, 
 * @return : boolean
 */

const resultSome = ArrayOfWords.some((element) => {
    return element.startsWith('s');
})

// every - all 
/**
 * Syntax - Array.prototype.every(callback);
 * @param :callback -> element, 
 * @return : boolean
 */
const resultEvery = ArrayOfWords.every((element) => {
    return element.startsWith('s');
})
console.log(`Some -> ${resultSome} Every -> ${resultEvery}`)





