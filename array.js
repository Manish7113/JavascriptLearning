const myarray = [0,1, 2,3,4,5,6]
const mySubArray = new Array(12, 33, 5)



// const copiedarray = mySubArray; // here if you copy the array like this 
// copiedarray.push(9999)
// console.log(mySubArray) // getting 9999 here beacuse array is non primitive data type
//
//  // to ensure this type of error the problem you can get the copy of mysubarray like this 
// const copiedarray1 = [...mySubArray];
// copiedarray1.push(465)
// console.log(mySubArray)


// // slice method 
//  // here is the performance of slice 
// const mynewArray = myarray.slice(0,2);
// console.log(myarray , 'muy array')
// console.log(mynewArray , 'sliced array ')

// // splice method
// // here the splice method also manipulate the original array so not to be used 

// const myNewOtherarray = myarray.splice(0,3);
// console.log(myNewOtherarray)
// console.log(myarray , 'my array ')


// // Array 
//  //  isArray 

// console.log(Array.isArray(mySubArray))
// const myname = 'anish '
// console.log(Array.isArray(myname),'myname ')


// const newArray = Array.from(myname)
// console.log(newArray)


// const otherarray = [0 , 1,2, 3, [4,5,6,7], [8,[9,[10, 11,12,[14, 15]], 16,17],19],18]
// console.log(otherarray.flat(Infinity), 'level one')


const a = 4;
const b = 5;
const c = 8;
console.log(Array.of(a, b, c ))