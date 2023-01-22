let data =JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(data)
let parent = document.getElementById("cartproduct");
window.addEventListener("load", ()=>{
    data.map((item)=>{

    
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", item.Image);
    let desc = document.createElement("p");
    desc.innerText = item.Description;
    let price = document.createElement("h4");
    price.innerText = item.price;
    
    div.append(image,desc);
    parent.append(div);
  })
})


let parent2 = document.getElementById("productprice");

let data2 = JSON.parse(localStorage.getItem("localStorageData")) || [];
window.addEventListener("load", ()=>{
    data.map((item)=>{

    
    let desc = document.createElement("p");
    desc.innerText = item.Description;
    let price = document.getElementById("bag_price")
    price.innerText = item.price;
    let total = document.getElementById("total")
    total.innerText = item.price;
    

    parent2.append(); 
    })
})
    

// pay link 
let pay = document.getElementById("pay");
pay.addEventListener("click",function(){
    console.log("yes");
    window.location.href = "paymentpage.html";
})