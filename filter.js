const myArr = [10 ,20,30,40,50,60,70,80,90,100]

//  const finalvalue = myArr.filter((item)=> item > 42)

// const finalvalue = myArr.filter((item , index, array)=>{
//     console.log(item, index, array , '---------------------------')
//     return item > 60 && item < 90
// })


// const finalvalue = myArr.filter((item)=>{
//     if(item === 20)
//         {
//             return item
//         }

// })


function validateNumber(number)
{
    return number > 20
}


// const finalvalue = myArr.filter(validateNumber)
const finalvalue = myArr.filter(function (item)
{
    return item > 50
})



 console.log(finalvalue , '++++')