const myarr = [1,2,3,4,5,6,8,9,7,10]

// console.log(myarr , '-----------------------')
console.log(myarr.map((item , index)=> {
      if(item ===6)
        {
            console.log('test')
        }
        else{

            return item
        }

}))