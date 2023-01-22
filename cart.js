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
    
    div.append(image,desc,price);
    parent.append(div);
  })
})


let parent2 = document.getElementById("productprice");
let carttotal = [];
let data2 = JSON.parse(localStorage.getItem("localStorageData")) || [];
window.addEventListener("load", ()=>{
    data.map((item)=>{
    let p = item.price;
    let bag = '';
    for(let i=1;i<p.length;i++){
        if(p[i]==="₹"||p[i]===","){
            continue;
        }
        else{
        bag += p[i];
        }
    }
   
    carttotal.push(+bag)
   
    
   
  
    parent2.append(); 
    })
    let total=0;
    console.log(carttotal)
    for(let item of carttotal){
        total+=item;
      final=total;
    }
    let displayprice = document.getElementById("bag_price")
    displayprice.innerText =total;
    let total1 = document.getElementById("total")
    total1.innerText = total;
    // console.log(total)
    localStorage.setItem("total",JSON.stringify(total))
})







// pay link 
let pay = document.getElementById("pay");
pay.addEventListener("click",function(){
    console.log("yes");
    window.location.href = "paymentpage.html";
})