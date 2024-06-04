// three type of variables but here is one more way 
// const  --> not to be reasign and redecalre in block scope 
const newYear  = 2024;
console.log(newYear , 'New year')
// let --> can be reasign but can not be the redeclare in the block scope 
let designation = 'developer'
designation = 'IAS'
console.log(designation , 'designation')

// var can be reasign and redecaler in bolck scope but avoid to use it 

var age = 23;
console.log(age , 'age in 2023')

age = 24 
console.log(age , 'age in 2024')

var age = 26;
console.log(age , 'age in 2026')

// use console.table instead of mulitiple console.logs
console.table([age, `designation : ${designation}`,newYear])





// var number = 23 ;
// console.log(number ,'number')