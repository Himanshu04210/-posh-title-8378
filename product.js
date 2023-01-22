let container = document.getElementById("products");
let category_name = document.getElementById("product-categorie");



let fullData = [];

window.addEventListener("load",function(){
    let product_name = localStorage.getItem("productName");
    category_name.innerText = product_name; 
    if(product_name === "Mobile" || product_name === "MOBILES" ||product_name === "MOBILE" || product_name === "Mobiles" || product_name === "mobile" || product_name === "mobiles"){
        let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=1`);
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
        window.location.href = "checkout.html";
        
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


// ***********************Navbar*****************************
let shopbyCatogery = document.getElementById("shopByCategory");
let shopbyCards_dropdown = document.querySelector(".shopByCatogery-DropDown")
let WebsiteLogo = document.querySelector(".website-logo");
let searchBar = document.querySelector(".searchBox");
let Searcharea = document.getElementById("nav-bar-inputSearch")

shopbyCatogery.addEventListener("click", () => {
    shopbyCards_dropdown.style.display = "block"
})

WebsiteLogo.addEventListener("click", () =>{
    shopbyCards_dropdown.style.display = "none"
})

Searcharea.addEventListener("click", ()=>{
    searchBar.style.display = "block"
})
WebsiteLogo.addEventListener("click", () =>{
    searchBar.style.display = "none"
})

// *************************Login-signup*****************************

const signInPopup = () => {
 
    document.querySelector(".sign-in-page").classList.remove("hidden");
    document.querySelector(".sign-up-page").classList.add("hidden")
    document.querySelector(".signinpage-background").classList.remove("hidden")
    
  }
   const signinpop = () => {
   document.querySelector(".signinpage-background").classList.remove("hidden")
   }
  
  const closeModal = () => {
    document.querySelector(".sign-in-page").classList.add("hidden")
    document.querySelector(".signinpage-background").classList.add("hidden")
    
    
  }
  // **********************login-as-Admin*****************************

  const loginpagepopup = () =>{
    document.querySelector(".login-Admin").classList.remove("hidden")
    document.querySelector(".sign-up-page").classList.add("hidden")
  }
  const Admincross = () =>{
    document.querySelector(".login-Admin").classList.add("hidden")
  }
  
  //////////////////////////////////  SIGN-UP-PAGE////////////////////////////////////

  const signUpPopup = () => {
    document.querySelector(".sign-up-page").classList.remove("hidden")
    document.querySelector(".sign-in-page").classList.add("hidden")
    document.querySelector(".signinpage-background").classList.remove("hidden")
    
  }
  const closesignup = () => {
    document.querySelector(".sign-up-page").classList.add("hidden")
    document.querySelector(".signinpage-background").classList.add("hidden")
  }
  
  ///////////////////////////////Sign-in FUNCTONALITY//////////////////////////////////////////
  
  let create_acc = document.querySelector(".sign-up-now");
  let email_signup = document.querySelector("#e-mail-signup-page");
  let password_signup = document.querySelector("#password-signup-page");
  let sign_in_data = [];
  create_acc.addEventListener("click", submitform)
  
  
  
  function submitform(){
    let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
    let obj = {
      email_signup_data: email_signup.value,
      password_signup_data: password_signup.value,
    }
     signupForm.push(obj)
     sign_in_data.push(signupForm)
     
    console.log(sign_in_data)
     localStorage.setItem("SignUp",JSON.stringify(signupForm))
     alert("Sign-Up Successfully")
  
  }
  
  
  let sign_in_now = document.querySelector(".sign-in-now");
  let email_signin = document.querySelector("#e-mail-signin-page");
  let password_signin = document.querySelector("#password-signin-page");
  
  sign_in_now.addEventListener("click", signInForms)
  
  function signInForms(){
    
    let signupForm = JSON.parse(localStorage.getItem("SignUp"))||[]
    let flag = false;
    count=0;
    nothing=0;
    signupForm.forEach((element,index) => {
     
      if(element.email_signup_data === email_signin.value){
        if(element.password_signup_data === password_signin.value){
          flag=true;
        }else{
          count++;
        }
      }else{
        nothing++;
       
      }
    });
  
    if(flag===true){
      alert("Sign In Succussful")
    }
    else if(count==1){
      alert("Wrong Password")
    }else{
      alert("User does not exist, You need to sign-up First")
    }
    
  }

  // ******************Linking product to main page***************************
let main_logo = document.querySelector(".main-website-logo-image")
main_logo.addEventListener("click" ,() =>{
    window.location.href = "index.html"
})

// ********************************************************************************


