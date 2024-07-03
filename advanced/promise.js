// basic promise 

// const myPromises = new Promise((resolve, reject)=>{
//     const error  = true
//     setTimeout(()=>{
//         console.log('this runs after one sec')
//         if(error)
//             {
//                 reject('Something went wrong')
//             }
//             else{
//                 resolve('Everything is correct')
//             }
       
      
//     } , 2000)
//     console.log('should to be compiled first')
// })
// myPromises.then((response)=>{
//     console.log(response)
//     console.log('value not to be shown')
// }).catch((error)=>{
//     console.log(error)
// })


// something different

// new Promise((resolve, reject)=>{
//     const condition = false
//     if(condition)
//         {
//             reject('4 is less than 5')
//         }
//         else{
//             resolve({name : 'Manish', lastname : 'kumawat'})
//         }
// }).then((response)=>{
//     return  response?.name
// }).then(function(name){
//     console.log(name , 'name')

// }).catch((error)=>{
//     console.log(error)
// })



// by using async await

// const myOtherPromise = new Promise((resolve, reject)=>{
//     const condition  = false
//     if(condition)
//         {
//            setTimeout(()=>{
//             resolve({name : 'MIT' , pass : '1213456'})
//            } , 1000)
//         }
//     else{
//         reject('something went wrong')
//     }
// })

// async function promiseConsumer(){
//     try{
//         const response = await myOtherPromise
//         console.log(response , '------------------')

//     }
//     catch(error)
//     {
//         console.log(error , '+++++++++++++++++++')

//     }
// }

// promiseConsumer()


// const myConsumer = async ()=>{
//     try{

//         const response = await myOtherPromise
//         console.log(response , '++++++++++++++')

//     }
//     catch(error)
//     {
//         console.log(error , '2222222222222222')

//     }
// }

// myConsumer()


fetch('https://catfact.ninja/fact').then((response)=>{
   return response.json()
}).then((res)=>{
    console.log(res , '-----------------')
}).catch((error)=>{
    console.log(error)
})

// const myfun = async ()=>{
//     try{
//         const resposne = await fetch('https://catfact.ninja/fact')
//         const data = await resposne.json()
//         console.log(data , '-----------------')

//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

// myfun()

