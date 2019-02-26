// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


//function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
//}

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(array, callbackFunction) {
  return callbackFunction(array.length);
}

console.log(items.length);

getLength (items,console.log);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

function sumNums(param1, param2, callbackFunction) {
  return callbackFunction(param1,param2);
}

function add(a, b) {
  return a + b;
}

console.log(sumNums(20,40,add));

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

function multiplyNums(param1, param2, callbackFunction) {
  return callbackFunction(param1,param2);
}

function multiply(a, b) {
  return a * b;
}

console.log(multiplyNums(10,40,multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function contains(array, callback) {
  return callback(array.length);

}

if (items.length >= 1){
  console.log('there is an item present (true)');

} else {
  console.log('no there are no items present (false)');

}

contains (items, console.log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
