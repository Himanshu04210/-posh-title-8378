let form = document.getElementById("form");

let operation = document.getElementById("operation");
console.log(operation.value)
operation.addEventListener("change",function(){
    if(operation.value === "Get"){
        form.innerHTML = `FORM`
    }
    else if(operation.value === "Post"){
        form.innerHTML = `<form action="" class="PostForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelImage">Enter Image URL</label><br>
        <input type="text" placeholder="Enter Image URL" id="ImageInput"><br>
        <label class="labelDesc">Enter Description</label><br>
        <input type="text" placeholder="Description" id="Description"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="number" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost">Submit</button>
     </form>`
    }
    else if(operation.value === "Put"){
        form.innerHTML = `<form action="" class="PutForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelImage">Enter Image URL</label><br>
        <input type="text" placeholder="Enter Image URL" id="ImageInput"><br>
        <label class="labelDesc">Enter Description</label><br>
        <input type="text" placeholder="Description" id="Description"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="number" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost">Submit</button>
     </form>`
    }
    else if(operation.value === "Patch"){
        form.innerHTML = `<form action="" class="PostForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <label class="labelPrice">Enter Price</label><br>
        <input type="number" placeholder="Enter price" id="priceInput"><br>
        <button class="submitPost">Submit</button>
        </form>`
    }
    else if(operation.value === "Delete"){
        form.innerHTML = `<form action="" class="PutForm">
        <label class="labelid">Enter ID</label><br>
        <input type="number" placeholder="Enter your ID" id="inputID"><br>
        <button class="submitPost">Submit</button>
        </form>`
    }
})
let container = document.getElementById("tbody");
window.addEventListener("load",()=>{
    let promise = fetch("https://paytm-mall-api-m9h3.onrender.com/Electonics/");
    promise.then((res)=>{
        // console.log(1);
        return res.json();
    })
    .then((response)=>{
        // console.log(2,3,response);
        renderProducts(response);
    })
})

function renderProducts(fullData){
    fullData.map((item)=>{
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.innerText = item.id;
        let desc = document.createElement("td");
        desc.innerText = item.Description;
        let price = document.createElement("td");
        price.innerText = item.price;

        tr.append(id,desc,price)
        container.append(tr);
    })
}