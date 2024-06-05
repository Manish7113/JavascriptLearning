// three type of variables but here is one more way 
// const  --> not to be reasign and redecalre in block scope 
// const newYear  = 2024;
// console.log(newYear , 'New year')
// // let --> can be reasign but can not be the redeclare in the block scope 
// let designation = 'developer'
// designation = 'IAS'
// console.log(designation , 'designation')

// var can be reasign and redecaler in bolck scope but avoid to use it 

// var age = 23;
// console.log(age , 'age in 2023')

// age = 24 
// console.log(age , 'age in 2024')

// var age = 26;
// console.log(age , 'age in 2026')

// // use console.table instead of mulitiple console.logs
// console.table([age, `designation : ${designation}`,newYear])





// var number = 23 ;
// console.log(number ,'number')

// data type 


// ------------------number data type  ---------------------------

// let finalResult = 1;

// for(let i = 1;  i<=55 ; i++)
//     {
//      finalResult = finalResult * 2
//     }

//     console.log(finalResult , 'final result ')

// ... creating big int 
// let x = 123456789012345678901234567890n;
// let y = BigInt("123456789012345678901234567890");


// console.log(x, y , 'value not to found ')

// ------------------string data type  ---------------------------

// const Post = 'Front end developement'
// const skill = "Web development"
// const someExtra = `The last one was ${skill }`
// console.log(Post , skill , someExtra , 'this is string output ')


// ----------------------------Boolean -------------------
// Have only two keys true or false and cover broad way to check the conditions 

// -------------------------- object ------------------------
// const obj = {name : 'developer ', skill : 'React developer' , value : 'Not yet '}
// console.log(obj, 'Object return ')
// console.log(obj['name'] ,'name only')
// obj['name'] = 'value'
// obj.name = 'my'
// console.log(obj )


// in js array is also a regular object you can get the value by defining key just here you go 
// const aray = [12, 13,43, 54]
// console.log(aray , 'arrrrrrrrrry')
// console.log(typeof aray , 'is the real type of array ')
// aray[0] = 34;

// console.log(aray)

// ----------------------------- undefined -------------------
// it is the default value of any variable which dont have assign its initail value 
// it is also the vlaue of the variable that is empty and dont have any value

// ------------------------------null ---------------------------------

// it is similar to the undefined but it si object type and here you go 
// console.log(typeof null ,'type of null ')
// console.log(typeof undefined , 'undefined ')
// we can intentionally set the value of null of the any variable that dont have value initially 


// ------------------------------- symbol --------------------------------