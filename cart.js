let data =JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(data)

window.addEventListener("load", ()=>{
    let parent = document.getElementById("cartproduct")
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", data[0].Image);
    let desc = document.createElement("p");
    desc.innerText = data[0].Description;
    let price = document.createElement("h4");
    price.innerText = data[0].price;
    
    div.append(image,desc);
    parent.append(div);
})


let parent2 = document.getElementById("productprice");

let data2 = JSON.parse(localStorage.getItem("localStorageData")) || [];
window.addEventListener("load", ()=>{
    // let div = document.createElement("div");
    let desc = document.createElement("p");
    desc.innerText = data[0].Description;
    let price = document.getElementById("bag_price")
    price.innerText = data[0].price;
    let total = document.getElementById("total")
    total.innerText = data[0].price;
    

    parent2.append();
    
    
    })
    