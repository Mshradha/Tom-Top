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


    var bigbox=document.createElement("div");
    bigbox.setAttribute("id","bigbox");

    var div1=document.createElement("div")
    div1.setAttribute("id","div1");

    var div2=document.createElement("div")
    div2.innerText="Item"
    div2.setAttribute("id","div2");

    var div3=document.createElement("div");
    div3.innerText="Item Details"
    div3.setAttribute("id","div3");

    var div4=document.createElement("div")
    div4.innerText="Price"
    div4.setAttribute("id","div4");

    var div5=document.createElement("div")
    div5.innerText="Remove";
    div5.setAttribute("id","div5");


   
    var box = document.createElement("div");
    box.setAttribute("id","box2");

    var di=document.createElement("div")
    di.setAttribute("id","di");

    var dii=document.createElement("div")
    dii.setAttribute("id","dii");

    var div_m=document.createElement("div");
   div_m.setAttribute("id","div_m");

    var div_n=document.createElement("div");
    div_n.setAttribute("id","div_n");

    var img = document.createElement("img");
     img.src = elem.image;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });
    div1.append(div2,div3,div4,div5)
    di.append(img)
    dii.append(name)
    div_m.append(price)
    div_n.append(btn)
    box.append(di,dii,div_m,div_n)
    bigbox.append(div1,box)
     
     document.querySelector("#container").append(bigbox);
  });

  function removeItem(elem, index) {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("CartItems", JSON.stringify(cartData));
    window.location.reload();
  }


function myFunction()
{
    window.location.href="index.html";
}
    
