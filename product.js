let container = document.getElementById("products");
let category_name = document.getElementById("product-categorie");

let fullData = [];

window.addEventListener("load",function(){
    let product_name = localStorage.getItem("productName");
    category_name.innerText = product_name; 
    if(product_name === "Mobile" || product_name === "MOBILES" ||product_name === "MOBILE" || product_name === "Mobiles" || product_name === "mobile" || product_name === "mobiles"){
        let promise = fetch("https://paytm-mall-api-withcatagory.onrender.com/Electonics/");
        promise.then((res)=>{
        return res.json();
})
.then((response)=>{
    console.log(response);
    fullData = response;
    renderProducts(response);
})
}
    else if(product_name === "GiftCard" || product_name === "Giftcard" || product_name === "giftcard" ||product_name === "Gift Cards" || product_name === "Gift Card" || product_name === "Gift card"){
        let promise = fetch("https://paytm-mall-api-withcatagory.onrender.com/GiftCard");
        promise.then((res)=>{
        return res.json();
})
.then((response)=>{
    console.log(response);
    fullData = response;
    renderProducts(response);
})
    }
    else {
        container.innerText = "Stock is NOT Available! "
    }
})


function renderProducts(arr) {
    container.innerHTML = null;
    arr.map((item)=>{
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",`${item.Image}`);
    img.setAttribute("class","product-image");
    let desc = document.createElement("p");
    desc.innerText = item.Description;
    let price = document.createElement("h4");
    price.setAttribute("class","product-price");
    price.innerText = item.price;
    card.append(img,desc,price);
    let localStorageData = []
    card.addEventListener("click",function(){
        localStorageData.push(item);
        localStorage.setItem("localStorageData",JSON.stringify(localStorageData));
        
    })
    container.append(card);


    })
}

// renderProducts(data.Electonics);


// Sort Functionality 
let sort = document.getElementById("sort");


sort.addEventListener("change",function(){
    console.log(sort.value)
    let newData = []
    if(sort.value === "Low-High"){
        // console.log("Yes");
         newData = fullData.sort((a,b)=>{
           let x =  a.price.split("");
           let y = b.price.split(""); 
           console.log(x,y);
           x.shift();
           y.shift();
           let xans = '';
           let yans = '';
           for(let i=0;i<x.length;i++){
                if(x[i]===','){
                    continue;
                }
                else{
                xans += x[i]; 
                }
           }
           for(let i=0;i<y.length;i++){
            if(y[i]===','){
                continue;
            }
            yans += y[i]; 
           } 
           x = +xans
           y = +yans;
           console.log(1,x,y); 
           console.log(Number(x),Number(y));
            return Number(x)-Number(y);
         });
         console.log(newData);
         renderProducts(newData);
    }
    else if(sort.value === "High-Low"){
        newData = fullData.sort((a,b)=>{
            let x =  a.price.split("");
            let y = b.price.split(""); 
            console.log(x,y);
            x.shift();
            y.shift();
            let xans = '';
            let yans = '';
            for(let i=0;i<x.length;i++){
                 if(x[i]===','){
                     continue;
                 }
                 else{
                 xans += x[i]; 
                 }
            }
            for(let i=0;i<y.length;i++){
             if(y[i]===','){
                 continue;
             }
             yans += y[i]; 
            } 
            x = +xans
            y = +yans;
            console.log(1,x,y); 
            console.log(Number(x),Number(y));
             return Number(y)-Number(x);
          });
          
          renderProducts(newData);
    }
    else if(sort.value === "Sort-by-Relevance"){
         newData = fullData; 
         renderProducts(newData);
    }
    
    
})

// Fillter functionality
let filttering = document.getElementById("fillter-btn");
let min = document.getElementById("min");
let max = document.getElementById("max");
filttering.addEventListener("click",function(){
    let from = min.value;
    let to = max.value;
    // console.log(from,to);
    let c = 1;
    let filteredData = fullData.filter((item)=>{
        
        let a = item.price;
        let x = a.split("");

        x.shift();
        let xans = '';
        for(let i=0;i<x.length;i++){
            if(x[i]===','){
                continue;
            }
            else{
            xans += x[i]; 
            }
       }
    //    +xans;
    //    console.log(typeof(+xans),xans,1);
    // console.log(item,c++,+xans,from,to);
    if(Number(xans)>=from && Number(xans)<=to){
        // console.log(item,c++);
        return item;
    }
    })
    console.log(filteredData);
    renderProducts(filteredData);  
})
