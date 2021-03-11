
// let productArray = [];
// let cartlist = [];

// function fetchData(){
//     function getProd() {
//         fetch("https://enigmatic-meadow-17195.herokuapp.com/viewprods/")
//         .then((response) => response.json())
//         .then((data) => {
//             console.table(data);
//             let list = document.querySelector('#products');
//             console.log(list);
//             productArray = data;
//             data.forEach((product) => {
//                 let item =`
//                 <div class="product-container">
//                     <div class="product-image">
//                     <img src=${product.image}/>
//                     </div>
//                     <div class="product-info">
//                     <h4>${product.name}</h4>
//                     <h4>${product.description}</h4>
//                     <h4>${product.price}</h4>
//                     <button class="btn" type = "button" onclick="add_to_cart(${ product.id })">Add to cart</button>
//                     </div>
//                 </div>
//                 `;
//                 list.innerHTML += item;
//                 });
//             });
//     }
//     getProd();

// function cartCount(){
//     let x = productCount;
//     document.getElementById("lblCartCount").innerHTML = x;
// }
// function add_to_cart(id){




//     let modal= document.getElementById("contents")
//     let cartItem = productArray.filter((product) => {
//         return product.id == id;
//     });
//     productCount = cartlist.push(cartItem[0]);
//     let selectedItems = cartItem[0];
//     console.log(productCount)
//     console.log(selectedItems)
//     console.log(cartItem)

//     let cart_stuff = `
//     <div class="opened-modal-content">
//     <div id="items${id}" product-prices=${selectedItems.price}>${selectedItems.name} :${selectedItems.price}</div>
//     <button class="removeButton" onclick="removeItems(${id})">Remove</button>
//     </div>
//     `;

//     modal.innerHTML += cart_stuff;

//     console.log(cartlist);
//     console.log(productCount);

//     function calculateTotalPrice(id){
//         let totalValue = document.getElementsByClassName("price")[0];
//         let num1 = parseInt(totalValue.innerHTML);
//         let num2 = document
//         .getElementById("items" + id)
//         .getAttribute("product-prices");
    
//         let totalAmount = parseInt(num1) + parseInt(num2)
//         totalValue.innerHTML = totalAmount;
//         console.log(totalValue);
//     }
//     calculateTotalPrice()
//     cartCount()
// }


// function checkOut(){
//     let totals = document.getElementsByClassName("price")[0].innerHTML;
//     alert(`Thanks for your purchase, Total${totals}`);
//     let clear = "";
//     let x = document.getElementById("contents");
//     x.innerHTML = clear;


//     document.getElementById("lblCartCount").innerHTML = f;
//     window.location.href = "./index.html";
// }

// let modal = document.getElementById("myModal")

// let btn = document.getElementById("myBtn")

// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function(){
//     modal.style.display = "block";
// };

// span.onclick = function() {
//     modal.style.display = "none"
// };

// window.onclick = function(event) {
//     if (event.target == modal){
//         modal.style.display = "none"
//     }
// }