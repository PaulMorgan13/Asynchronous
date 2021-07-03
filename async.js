let  iventory = {
        fruit : ["strawberry", "grapes", "banana", "apple"],
        liquid : ["water", "soda", "juice", "shake"],
        holder : ["cone", "cup", "bowl", "stick"]  

}




iventory.fruit[0];   
iventory.liquid[0];  

console.log(iventory.fruit[0])
console.log(iventory.liquid[0])
console.log(iventory.holder[0])





let order = (Fruit_name, call_pro) =>{

    setTimeout(()=>{
        console.log(`${iventory.fruit[Fruit_name]} was selected`)    

        production()
    },2000)
    call_pro()
};   


let production =() =>{   
    console.log("productions has started")       

    setTimeout(()=>{
        console.log(`fruit has been chopped`);  

        setTimeout(()=>{
                console.log(`${iventory.liquid[0]} and ${iventory.liquid[2]} was added`) 

                setTimeout(()=>{
                        console.log("machine has started");  
                            setTimeout(()=>{
                                console.log(`the juice was filled in the ${iventory[1]}`)   

                                    setTimeout(()=>{ 

                                                setTimeout(()=>{
                                                    console.log("icing was served")
                                                },  1000)
                                        console.log("there was no topping to put on")
                                    }, 2000) 

                            }, 1000)
                }, 1000)
        },1000)

    }, 2000)




    setTimeout(()=>{

    },0000)

};   


order(2, production)



