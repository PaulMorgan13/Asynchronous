//const { reject } = require("async");

let  inventory = {
        fruit : ["strawberry", "grapes", "banana", "apple"],
        liquid : ["water", "soda", "juice", "shake"],
        holder : ["cone", "cup", "bowl", "stick"]  

}

 

let isShopOpen = true; 




function time(ms){
    return new Promise((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    });
} 

async function kitchen () {


    try{ 
        await time(2000)
        console.log(`${inventory.fruit[2]} `) 



        await time(0000)
        console.log("start the production") 



        await time(1000)
        console.log("cutting the fruit")


        await time(1000) 
        console.log(`${inventory.fruit[1]} and ${inventory.fruit[0]} was added` )



        await time(1000) 
        console.log("machine is starting")   



        await time(2000) 
        console.log(`juice was placed in the ${inventory.holder[1]}`)  


        await time(3000) 
        console.log(`${inventory.liquid[2]} was selected`)  

        await time(2000)
        console.log("food was served")
    }     

    catch(error){
        console.log("customer has left")
    } 
    finally{
        console.log("day ended, shop is now closed ")
    }  
}  


kitchen();