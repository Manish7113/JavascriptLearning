const symbl  = Symbol('Test')



const obj = {
    name :'Manish ',
    age : 19,
    hru : true,
    numbers : [12, 14, 15,],
    family:{father : 'Papa', mother : 'muma'},
    hello : ()=>{
        console.log('hello every one ')
    },
    [symbl] : 'Hello symbol ji'

}

// console.log(obj , 'object ')
// console.log(obj.name)
// console.log(obj['age'])
// console.log(obj[symbl] , 'symbol hai bhai ')
// console.log(Object.keys(obj),'keys')
// console.log(Object.values(obj), 'values')
// console.log(Object.entries(obj), 'entries')

// obj.age = 56;
// console.log(obj.age)

// Object.freeze(obj)
// obj.age= 44;
// console.log(obj.age)

// console.log(obj.hello())



