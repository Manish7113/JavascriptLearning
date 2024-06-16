console.log('socpe hello')
// types
// global scope let m = ' manish '
// Block scope { const  a = 10 }
// functional scope function () {
//     let test  =  ' vlaue one '
// }


// const b = 10 ;
// if(true)
//     {
//         // console.log(b)
//         const b = 12;
//         console.log(b , 'inside ')

//     }

//     console.log(b , 'outside')

// ------------------------ getting error when we try to declare it in block scope than getting the getting the error that cannot read before initialzing  and when comment it insisde the block scope then returning the vlaue of 10  which is from the global scope 



// let b = 10 ;
// if(true)
//     {
//         // console.log(b)
//         let b = 12;
//         console.log(b , 'inside ')

//     }

//     console.log(b , 'outside')


// --------------- same as it is 


var b = 10 ;
if(true)
    {
        console.log(b) // 10
        var b = 12;
        console.log(b , 'inside ') // 12 
        var c = 10

    }

    console.log(b , 'outside') // 12
    console.log(c , 'c') // 12

// ------------------------------- not getting any error 
