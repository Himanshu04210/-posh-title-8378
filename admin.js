let form = document.getElementById("form");

let operation = document.getElementById("operation");
console.log(operation.value)
operation.addEventListener("change", function () {
    if (operation.value === "Get") {
        form.innerHTML = `FORM`
        let promise = fetch("https://paytm-mall-api-withcatagory.onrender.com/Electonics/");
        promise.then((res) => {
            // console.log(1);
            return res.json();
        })
            .then((response) => {
                // console.log(2,3,response);
                renderProducts(response);
            })
    }
    else if (operation.value === "Post") {
        form.innerHTML = `<form action="" class="PostForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelImage">Enter Image URL</label><br>
        <input type="text" placeholder="Enter Image URL" id="ImageInput"><br>
        <label class="labelDesc">Enter Description</label><br>
        <input type="text" placeholder="Description" id="Description"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="text" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost" id="submitPost">Submit</button>
     </form>`
        let submitPost = document.getElementById("submitPost");
        let inputID = document.getElementById("inputID")
        submitPost.addEventListener("click", (e) => {
            e.preventDefault();
            let promise = fetch("https://paytm-mall-api-withcatagory.onrender.com/Electonics/",
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: inputID.value,
                        Image: ImageInput.value,
                        Description: Description.value,
                        price: priceInput.value
                    })
                })
            promise.then((res) => {
                return res.json();
            })
                .then((data) => {
                    console.log(data);
                })
            form.innerHTML = null;    
        })
    }
    else if (operation.value === "Put") {
        form.innerHTML = `<form action="" class="PutForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelImage">Enter Image URL</label><br>
        <input type="text" placeholder="Enter Image URL" id="ImageInput"><br>
        <label class="labelDesc">Enter Description</label><br>
        <input type="text" placeholder="Description" id="Description"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="text" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost" id="submitPut">Submit</button>
     </form>`;
     submitPut.addEventListener("click", (e) => {
        e.preventDefault();
            let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/${inputID.value}`,
                {
                    method: "PUT",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Image: ImageInput.value,
                        Description: Description.value,
                        price: priceInput.value
                    })
                })
            promise.then((res) => {
                return res.json();
            })
                .then((data) => {
                    console.log(data);
                })
                form.innerHTML = null;   
        })
    }

    else if (operation.value === "Patch") {
        form.innerHTML = `<form action="" class="PostForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="text" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost" id="submitPatch">Update</button>
        </form>`
        submitPatch.addEventListener(("click"), (e) => {
            e.preventDefault();
            let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/${inputID.value}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        price: priceInput.value
                    })
                })
                form.innerHTML = null;   
        })
    }
    else if (operation.value === "Delete") {
        form.innerHTML = `<form action="" class="PutForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <button class="submitPost" id="submitDelete">Delete</button>
        </form>`
        submitDelete.addEventListener(("click"), (e) => {
            e.preventDefault();
            let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/${inputID.value}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-Type": "application/json",
                    }
                })
                promise.then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    console.log(data);
                })
                form.innerHTML = null;   
        })
    }
})
let container = document.getElementById("tbody");
window.addEventListener("load",()=>{
    let promise = fetch("https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=1");
    promise.then((res)=>{
        // console.log(1);
        return res.json();
    })
    .then((response)=>{
        // console.log(2,3,response);
        renderProducts(response);
    })
})


function renderProducts(fullData) {
    container.innerHTML = null;
    fullData.map((item) => {
        let tr = document.createElement("tr");
        tr.setAttribute("class","tr")
        // tr.style.border = "1px solid grey"
        let id = document.createElement("td");
        id.innerText = item.id;
        let desc = document.createElement("td");
        desc.innerText = item.Description;
        let price = document.createElement("td");
        price.innerText = item.price;

        tr.append(id, desc, price)
        container.append(tr);
    })
}

// pagination

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",function(){
    let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=1`);
    promise.then((res)=>{
    return res.json();
})
.then((response)=>{
console.log(response);
fullData = response;
renderProducts(response);
})
    console.log('Yes');
 
})

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click",function(){
    let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=2`);
    promise.then((res)=>{
    return res.json();
})
.then((response)=>{
console.log(response);
fullData = response;
renderProducts(response);
})
    console.log('Yes');
})

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click",function(){
    let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=3`);
    promise.then((res)=>{
    return res.json();
})
.then((response)=>{
console.log(response);
fullData = response;
renderProducts(response);
})
    console.log('Yes');
})

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click",function(){
    let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=4`);
    promise.then((res)=>{
    return res.json();
})
.then((response)=>{
console.log(response);
fullData = response;
renderProducts(response);
})
    console.log('Yes');
})

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click",function(){
    let promise = fetch(`https://paytm-mall-api-withcatagory.onrender.com/Electonics/?_limit=12&_page=5`);
    promise.then((res)=>{
    return res.json();
})
.then((response)=>{
console.log(response);
fullData = response;
renderProducts(response);
})
    console.log('Yes');
})

// pagination ended
// ************************admin-logpout************************

const Adminpopup = () => {
    document.querySelector(".logout-container").classList.remove("hidden")
}

const NO = () =>{
    document.querySelector(".logout-container").classList.add("hidden")
}

const YES = () =>{
    window.location.href = "index.html"
}
