let data =JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(data)
let parent = document.getElementById("cartproduct");

 window.addEventListener("load", ()=>{
   

    renderItem(data)
    

  
 })

function renderItem(data){
    
    data.map((item,index)=>{
    
    
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", item.Image);
        let desc = document.createElement("p");
        desc.innerText = item.Description;
        let price = document.createElement("span");
        price.setAttribute("id","price")
        price.innerText = item.price;
        let remove = document.createElement("button");
        remove.setAttribute("id","remove");
        remove.innerText = "Remove"
        remove.addEventListener("click",function(){
            console.log("work")
            data.splice(index,1);
            localStorage.setItem("cartItems",JSON.stringify(data))
            renderItem(data)
            location.reload()
        })
        div.append(image,desc,price,remove);
        parent.append(div);
    
      })
}

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


// ****************navbar**************
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

// ***********************login-sign-up*********************


//////////////////////////SIGN-IN-PAGE////////////////////////////////
 
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
  
//////////////////sign in/signup functionality end////////////////////////////////////////

// Search Functionality
let searchBtn = document.getElementById("searchicon");
searchBtn.addEventListener("click",function(){
  // console.log("Yes");
  let product = document.getElementById("nav-bar-inputSearch");
  // console.log(product.value);
  localStorage.setItem("productName",product.value);
  window.location.href = "product.html"
})
// Search Functionality ended


// Admin Part

let adminbtn = document.getElementById("adminbtn");
let adminName = document.getElementById("adminName");
let adminPassword = document.getElementById("adminPassword");
adminbtn.addEventListener("click",function(){
  if(adminName.value === "admin" && adminPassword.value === "admin"){
    alert("Admin Login Successful");
    window.location.href = "admin.html";
  }
})

// Admin part ended

//  Cart Link 

let cartPage = document.getElementById("Cart-navBar");
cartPage.addEventListener("click",()=>{
  window.location.href = "cart.html";
})

// Cart Link ended