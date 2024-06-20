//  1) for loop 


const myarray = [10,20,30,40,50,60]

// for(let i = 0 ; i< myarray.length ; i++)
//     {
//         console.log(myarray[i] + 1)
//     }

// 2 do while loop (iterate at least one time )

// let iterator = myarray.length;
// do{
//     console.log('hello world ', myarray[iterator-1])
//     iterator ++ ;   
// }
// while(iterator < myarray.length)

//3 while loop 

// let iterate  = 0 ;
// while(iterate < myarray.length)
//     {
//         console.log(myarray[iterate])
//         iterate++;
//     }


//   note  --  we can not change the value of constant in the normal variable even we can in object and array 


// console.log(myarray)
// myarray.push(45)
// console.log(myarray , '-------------------')

// const myobj = {
//     name :'test',
//     age : '154',
//     number : 9617826422,
// }
// console.log(myobj)
// myobj['test'] = 'value not defined';
// console.log(myobj)


// for Each 
// its a different type of loop // this loop dosen't return anything while explicitly you want to be but you couldn't

// by callback function 

// myarray.forEach((item, index, arr)=>{
//     console.log(item, index, arr , '-------------------')
// })


// by annonums function 
// myarray.forEach(function (item, index, array){
//     console.log(item , index, array , '++++++++++++++++++++++++++')
// })

// function printMe(item, index, array){
//     console.log(item,index, array , '----------------')
// }

// myarray.forEach(printMe)




