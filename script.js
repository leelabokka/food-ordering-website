let foods=[

{name:"Pizza",price:200,rating:"⭐⭐⭐⭐",img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"},
{name:"Burger",price:150,rating:"⭐⭐⭐⭐",img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
{name:"Biryani",price:220,rating:"⭐⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Chicken_biryani.jpg"},
{name:"Idli",price:90,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/8/89/Idli_Sambar.jpg"},
{name:"Dosa",price:120,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Masala_Dosa.jpg"},
{name:"Paneer",price:180,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Paneer_Tikka_Masala.jpg"},
{name:"Noodles",price:160,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Fried_noodles.jpg"},
{name:"Fried Rice",price:170,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chinese_fried_rice.jpg"},
{name:"Ice Cream",price:90,rating:"⭐⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Ice_Cream_dessert_02.jpg"},
{name:"Cold Drink",price:60,rating:"⭐⭐⭐",img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Coca-Cola_glass_bottle.jpg"}

];

let cart=[];
let totalPrice=0;

function displayFoods(list){

let menu=document.getElementById("menu");

if(!menu) return;

menu.innerHTML="";

list.forEach(food=>{

let card=document.createElement("div");

card.className="food-card";

card.innerHTML=`

<img src="${food.img}">
<h3>${food.name}</h3>
<p>₹${food.price}</p>
<p>${food.rating}</p>

<button onclick="addToCart('${food.name}',${food.price})">Add to Cart</button>

`;

menu.appendChild(card);

});

}

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}

function updateCart(){

let items=document.getElementById("cart-items");

let count=document.getElementById("item-count");

let total=document.getElementById("total-price");

if(!items) return;

items.innerHTML="";

totalPrice=0;

cart.forEach(item=>{

let li=document.createElement("li");

li.textContent=item.name+" ₹"+item.price;

items.appendChild(li);

totalPrice+=item.price;

});

count.textContent=cart.length;

total.textContent=totalPrice;

}

function placeOrder(){

if(cart.length===0){

alert("Cart is empty");

return;

}

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({

name:"Food Order",

qty:cart.length,

total:totalPrice

});

localStorage.setItem("orders",JSON.stringify(orders));

localStorage.removeItem("cart");

alert("Order Placed Successfully!");

location.reload();

}

document.getElementById("search")?.addEventListener("input",function(){

let value=this.value.toLowerCase();

let filtered=foods.filter(food=>

food.name.toLowerCase().includes(value)

);

displayFoods(filtered);

});

displayFoods(foods);

updateCart();
