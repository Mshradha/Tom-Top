var cartData=JSON.parse(localStorage.getItem("CartItems"));
console.log(cartData)
if(cartData==null || cartData.length==0){
    // var box=document.createElement("div")
    var i=document.createElement("img");
    i.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp_9cG9McSwAEzCH2Y3ln4CiENzdqtfBj1A&usqp=CAU")
    i.setAttribute("id","image")
    

    var box=document.createElement("div");
    box.setAttribute("id","box")

    var h=document.createElement("h2");
    h.innerText="Your shopping cart is empty."

    var p=document.createElement("p");
    p.innerText="Please log in to view the products you have previously added."
    
    var btn=document.createElement("button")
    btn.innerText="Continue Shopping"
    btn.addEventListener("click",myFunction)
    
   

    box.append(h, p, btn)
    document.querySelector("#container").append(i,box)

}

else{
    var total=cartData.reduce(function(sum,el,index,arr){
        return sum+Number(el.price);
    },0);

    var length=cartData.length;
    console.log(length);

    console.log(total);
}
cartData.map(function (elem, index) {
    var table=document.createElement("table");
    var thead=document.createElement("thead");
    var tr1=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText="item";
    var td2=document.createElement("td");
    td2.innerText="Details";
    var td3=document.createElement("td");
    td3.innerText="Price";
    var td4=document.createElement("td");
    td4.innerText="Qty";

    tr1.append(td1,td2,td3,td4);
    thead.append(tr1);
    table.append(thead);
    document.querySelector("body").append(table);











//     var box = document.createElement("div");
//     box.setAttribute("id","box2");

//     var div_m=document.createElement("div");
//     div_m.setAttribute("id","div_m");

//     var div_n=document.createElement("div");
//     div_n.setAttribute("id",div_n);

//     var img = document.createElement("img");
//     img.src = elem.image;

//     var name = document.createElement("p");
//     name.textContent = elem.name;

//     var price = document.createElement("p");
//     price.innerText = elem.price;

//     var btn = document.createElement("button");
//     btn.innerText = "Remove";
//     btn.addEventListener("click", function () {
//       removeItem(elem, index);
//     });
//     div_m.append(img, name, price, btn);
//     box.append(div_m,div_n)
//     document.querySelector("#container").append(box);
  });

//   function removeItem(elem, index) {
//     console.log(elem, index);
//     cartData.splice(index, 1);
//     console.log(cartData);
//     localStorage.setItem("CartItems", JSON.stringify(cartData));
//     window.location.reload();
//   }


// function myFunction()
// {
//     window.location.href="index.html";
// }
    
