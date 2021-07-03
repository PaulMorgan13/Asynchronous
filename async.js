//const { reject } = require("async");

let  inventory = {
        fruit : ["strawberry", "grapes", "banana", "apple"],
        liquid : ["water", "soda", "juice", "shake"],
        holder : ["cone", "cup", "bowl", "stick"]  

}

 

let isShopOpen = true; 



let order = (time, work) =>{ 
        return new Promise( (resolve, reject) =>{
            if (isShopOpen){ 

                setTimeout(()=>{
                    resolve(work())
                },time)
            }
            else {
                reject(console.log("our shop is closed "))
            }



        })



}


order(2000,()=> console.log(`${inventory.fruit[0]} was selected`))
    
    .then(()=>{
        return order(0000, ()=>console.log('production has started'))
    }) 

    .then( 
        ()=>{
            return order(2000, ()=> console.log(`cutting ${inventory.fruit[0]}`))
        }
    ) 

    .then(()=> {
        return order(1000, ()=> {
            console.log(`${inventory.liquid[0]} and ${inventory.liquid[1]} was selected.`)
        })
    })  

    .then(()=>{
        return order(1000, ()=>{
            console.log("start the machine")
        })
    })  

    .then(()=>{
        return order(2000, ()=>{
            console.log(`ice cream was placed in the ${inventory.holder[1]}`)
        })
    })  

    .then(()=>{
        return order(3000, ()=>{
            console.log(`${inventory.fruit[3]} was selected` )
        })
    })  

    .then(()=>{
        return order(1000, ()=>{
            console.log("your order was served")
        })
    })    


    .catch(()=>{
        console.log("customer left")

    })  


    .finally(()=>{
        console.log("day ended")

    })