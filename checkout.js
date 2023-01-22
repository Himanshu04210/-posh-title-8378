





let container = document.getElementById("check1");
let cartItem = JSON.parse(localStorage.getItem("cartItems"))||[];
let data = JSON.parse(localStorage.getItem("localStorageData")) || [];
    
    window.addEventListener("load", ()=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", data[0].Image);
        
        div.append(image);
        container.append(div);
        
    })

    let container2 = document.getElementById("check3");

    let data2 = JSON.parse(localStorage.getItem("localStorageData")) || [];
    window.addEventListener("load", ()=>{
        let div = document.createElement("div");
        let desc = document.createElement("p");
        desc.innerText = data[0].Description;
        let price = document.createElement("h4");
        price.innerText = data[0].price;
        
        div.append(desc,price);
        container2.append(div);
        
        
        })
        
        
        // let addbtn = document.getElementById("addbtn")
        //     addbtn.addEventListener("click",function(){

        //     localStorage.setItem("cartItems",JSON.stringify(data));
        //     // console.log("working")

        //     let data3 = JSON.parse(localStorage.getItem("cartItems"))
        //     window.location.href = "cart.html";
        //     console.log(data3)

        // })
        // cart link
        let addbtn = document.getElementById("addbtn")
        addbtn.addEventListener("click",function(){
            cartItem.push(data[0]);
            localStorage.setItem("cartItems",JSON.stringify(cartItem));
            window.location.href = "cart.html";
        })
