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

// Logo
//1st Div
let arr1 = [{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710342/1620736738312.jpg?imwidth=140&impolicy=hq",title:"Central"},//1
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498074/1613028372599.jpg?imwidth=140&impolicy=hq",title:"Pantaloons"},//2
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498091/1620736830834.png?imwidth=140&impolicy=hq",title:"U.S.Polo Assn."},//3
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994845/1643780245028.png?imwidth=140&impolicy=hq",title:"Brand Factory"},//4
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498086/1610536486321.jpg?imwidth=140&impolicy=hq",title:"Levi's"},//5
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498239/1620736478260.jpg?imwidth=140&impolicy=hq",title:"ONLY"},//6
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498254/1610536539307.jpg?imwidth=140&impolicy=hq",title:"UCB"},//7
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498081/1583915454539.jpg?imwidth=140&impolicy=hq",title:"BIBA"},//8
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994846/1643780303875.jpg?imwidth=140&impolicy=hq",title:"Bewakoof.com"},//9
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498075/1593586492547.jpg?imwidth=140&impolicy=hq",title:"Myntra"},//10
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994132/1643692700179.png?imwidth=140&impolicy=hq",title:"V.Mart"},//11
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994133/1643692702063.jpg?imwidth=140&impolicy=hq",title:"Westside"},//12
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994135/1643692758763.jpg?imwidth=140&impolicy=hq",title:"Jack-n-Jones"},//13
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994137/1643692795789.jpg?imwidth=140&impolicy=hq",title:"fabindia"},//14
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994138/1643692870440.jpg?imwidth=140&impolicy=hq",title:"Allen solly"},//15
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994847/1643780584196.png?imwidth=140&impolicy=hq",title:"fbb"},//16
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994140/1643692915157.jpg?imwidth=140&impolicy=hq",title:"Indian Terrain"},//17
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994848/1643780625232.png?imwidth=140&impolicy=hq",title:"Reliance Trends"},//18
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994852/1643780584093.jpg?imwidth=140&impolicy=hq",title:"Jockey"},//19
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994849/1643780709215.jpg?imwidth=140&impolicy=hq",title:"Decathlon"},//20
];
//2nd Div
let arr2 = [{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498530/1610537092744.png?imwidth=140&impolicy=hq",title:"Iconic"},//1
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498114/1610537113386.jpg?imwidth=140&impolicy=hq",title:"Raymonds"},//2
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498115/1610537339349.jpg?imwidth=140&impolicy=hq",title:"Jockey"},//3
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498256/1620736733672.jpg?imwidth=140&impolicy=hq",title:"Vero Moda"},//4
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498129/1613028463583.png?imwidth=140&impolicy=hq",title:"Beverly Hills Polo Club"},//5
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498127/1610537689405.png?imwidth=140&impolicy=hq",title:"Madame"},//6
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710419/1610542731323.jpg?imwidth=140&impolicy=hq",title:"Peter England"},//7
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710420/1610543135214.jpg?imwidth=140&impolicy=hq",title:"Van Heusen"},//8
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498111/1610543084890.jpg?imwidth=140&impolicy=hq",title:"Louis Philippe"},//9
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710421/1610543158966.jpg?imwidth=140&impolicy=hq",title:"Planet Fashion"},//10
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498105/1610535869042.png?imwidth=140&impolicy=hq",title:"109 F"},//11
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/498118/1610535851387.png?imwidth=140&impolicy=hq",title:"Aurelia"},//12
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994263/1643711210390.jpg?imwidth=140&impolicy=hq",title:"American Eagle"},//13
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994264/1643711069857.jpg?imwidth=140&impolicy=hq",title:"Selected homme"},//14
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994265/1643711263391.jpg?imwidth=140&impolicy=hq",title:"Manyavar"},//15
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994266/1643711205459.jpg?imwidth=140&impolicy=hq",title:"La senza"},//16
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994267/1643711489659.jpg?imwidth=140&impolicy=hq",title:"Major Brands"},//17
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994278/1643712435320.jpg?imwidth=140&impolicy=hq",title:"Taneira"},//18
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994279/1643712364578.jpg?imwidth=140&impolicy=hq",title:"Spykar"},//19
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994288/1643713188868.jpg?imwidth=140&impolicy=hq",title:"Zivame"},//20
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994298/1643713113821.jpg?imwidth=140&impolicy=hq",title:"Tailorman"},//21
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994348/1643715968772.jpg?imwidth=140&impolicy=hq",title:"Disrupt"},//22
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/994350/1643716033149.jpg?imwidth=140&impolicy=hq",title:"Simon Carter"}//23
];
//3rd Div
let arr3 = [{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995524/1643867277967.jpg?imwidth=140&impolicy=hq",title:"Bata"},//1
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995525/1643867496758.jpg?imwidth=140&impolicy=hq",title:"Nike"},//2
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995526/1643867362885.png?imwidth=140&impolicy=hq",title:"Puma"},//3
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995527/1643867532232.jpg?imwidth=140&impolicy=hq",title:"Khadim's"},//4
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995528/1643867625370.jpg?imwidth=140&impolicy=hq",title:"Red Chief"},//5
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710655/1643866806024.jpg?imwidth=140&impolicy=hq",title:"Speedo"},//6
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995529/1643867506442.jpg?imwidth=140&impolicy=hq",title:"Sports Station"},//7
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995530/1643867664954.jpg?imwidth=140&impolicy=hq",title:"Woodland"},//8
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710654/1643866837835.jpg?imwidth=140&impolicy=hq",title:"Metro Shoes"},//9
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710657/1613028563419.jpg?imwidth=140&impolicy=hq",title:"Mochi"},//10
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995531/1643867698366.jpg?imwidth=140&impolicy=hq",title:"Lotto"},//11
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995533/1643867991105.jpg?imwidth=140&impolicy=hq",title:"Reliance Footwear"},//12
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995534/1643868084258.jpg?imwidth=140&impolicy=hq",title:"Steve Madden"},//13
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/995532/1643867743019.jpg?imwidth=140&impolicy=hq",title:"Regal"},//14
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710661/1613028718597.jpg?imwidth=140&impolicy=hq",title:"Call it Spring"},//15
{img:"https://assetscdn1.paytm.com/images/catalog/view_item/710662/1613028739303.jpg?imwidth=140&impolicy=hq",title:"C&K"}//16
];

let container1 = document.getElementById("logo-1");
container1.setAttribute("class", "box1")
let container2 = document.getElementById("logo-2");
container2.setAttribute("class", "box2")
let container3 = document.getElementById("logo-3");
container3.setAttribute("class", "box3")

function renderLogo(data,box) {
    data.map((item)=>{
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",`${item.img}`);
        image.setAttribute("class", "corousel-image")
        let name = document.createElement("h4");
        name.innerText = item.title;
        card.append(image,name);
        box.append(card);
    })
}

renderLogo(arr1,container1);
renderLogo(arr2,container2);
renderLogo(arr3,container3);

$(".box1").slick({
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    autoplay: false,
    dots: true,
    arrows: true,        
    autoplaySpeed: 4000
});
$(".box2").slick({
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    autoplay: false,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000
});
$(".box3").slick({slidesToShow: 8,
    slidesToScroll: 4,
    infinite: true,
    autoplay: false,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000
});



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