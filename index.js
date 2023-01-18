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





