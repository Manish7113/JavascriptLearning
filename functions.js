// ------------------------- normal funcitons 
// function happNewYear (){
//     console.log("Happy new year ")
// }

// happNewYear()

// ------------------------- normal function with return value
// function newMessage (){
//     return 'Hppy new year Message'
// }

// const message = newMessage()
// console.log(message , '55555555555555555')



// ----------------------------function with arguments 

// function add(n , n1){
//     console.log(n+n1) 
// }

// add(10 , 12)

// ----------------------------function with arguments and with return value

// function messageWithName (name){
//     return `Hello ${name} Ji , Hope you are doing well `
// }

// const messageOne = messageWithName('sonam')
// console.log(messageOne)


// ----------------------------function with arguments's default value 

// function messageWithName (name = 'User'){
//     return `Hello ${name} Ji , Hope you are doing well `
// }

// const messageOne = messageWithName()
// console.log(messageOne)


// ----------------------------function with n+ arguments's 

// function messageWithName (...num){
//    return num
// }

// const messageOne = messageWithName(1,2,3,2,5,8,9)
// console.log(messageOne) // returning an array



// ----------------------------if you pass argument more than the parameter than the funciton ignores the argumnet 

// function messageWithName (name , headname ){ // parameter 
//     console.log(name + ' ' + headname)
//   }
  
//   const messageOne = messageWithName(1,2,3,2,5,8,9) // argument 



// ----------------------------passing an object as arguments


// function messageWithName (obj){
//    return `Hello ${obj.name} ${obj.headName} `
// }

// const object = {name :'John', headName:'test'}
// const messageOne = messageWithName({name :'Manish' , headName :'Kumwat'})
// const messageTwo = messageWithName(object)
// console.log(messageOne) 
// console.log(messageTwo)



// ----------------------------passing an array as arguments


// function messageWithName (array){
//    array?.map((item)=>console.log(item*2 , 'mult 2'))
// }

// messageWithName([10,20,40])
// const array = [1 , 2 , 3 , 4 ]
// messageWithName(array)

