var details = JSON.parse(localStorage.getItem("productDetails"));
    var cartData = JSON.parse(localStorage.getItem("CartItems")) || [];
    showdetails(details);


    function showdetails(details) {
        document.getElementById("containershra").innerHTML = "";

        details.map(function (el) {

            var div2 = document.createElement("div2");
            div2.setAttribute("id", "imagebox");

            var image = document.createElement("img");
            image.setAttribute("src", el.image);

            var div = document.createElement("div");
            div.setAttribute("id", "product");

            var brand = document.createElement("p");
            brand.textContent = el.name;
            brand.setAttribute("id", "brandshra");
            console.log(brand)

            var name = document.createElement("p");
            name.textContent = el.name2;
            name.setAttribute("id", "secondshra");

            var div3 = document.createElement("div")
            div3.setAttribute("id","div3")

            var re= document.createElement("p");
            re.innerText="Be the first review this item"
            re.style.color="blue";
            re.style.cursor="grab";

            var re1=document.createElement("p");
            re1.innerText="|";
            var re3=document.createElement("p");
            re3.innerText="|";


            var re2=document.createElement("p");
            re2.innerText="Ask A Question";
            re2.style.color="blue";
            re2.style.cursor="grab";

            var namex = document.createElement("p");
            namex.textContent = "Item#: H37740-L"



            var price = document.createElement("p");
            price.textContent = "Price:"+ " " +el.price;
            price.setAttribute("id", "priceshra");

            var price2=document.createElement("p");
            price2.textContent="Regular_Price:"+" "+el.Regular_Price;
            price2.setAttribute("id", "price");

            var div5=document.createElement("div");
            div5.setAttribute("id","div5");

            var ship=document.createElement("p");
            ship.innerText="Ship From:"

            var btn_ship=document.createElement("button");
            btn_ship.innerText="China Warehouse";
            btn_ship.style.backgroundColor="White";
            btn_ship.setAttribute("id","btn_ship")

            var about = document.createElement("p");
            about.textContent = el.about;
            about.setAttribute("id", "aboutshra");

            var sh=document.createElement("hr");
            sh.setAttribute("id","sh")

            var div6=document.createElement("div");
            div6.setAttribute("id","div6")


            var dis=document.createElement("p");
            dis.innerText="Dispatch:"

            var dis2=document.createElement("p");
            dis2.innerText="Usually will be shipped in 24 hours";
            
            var btn = document.createElement("button");
            btn.setAttribute("id", "btn");
            btn.textContent = "Buy Now";
            btn.addEventListener('click',function(){
                Payment(el)
            })


            var btn2 = document.createElement("button");
            btn2.setAttribute("id", "btn2");
            btn2.textContent = "Add To Cart";


            // btn.textContent="for Standard Shipping";
            btn2.addEventListener('click', function () {
                addToCart(el)
            })


            var div4=document.createElement("div");
            div4.setAttribute("id","div4")
             var ec=document.createElement("p");
             ec.innerText="Buyer Protection"
             ec.setAttribute("id","ec")

             var ec1=document.createElement("p");
             ec1.innerText="Full Refund If you don't receive your order"

             var ec2=document.createElement("p");
             ec2.innerText="Full or Partial Refund , If the item is not as described"
            

             var div7=document.createElement("div")
             div7.setAttribute("id","div7");

             var shipp=document.createElement("p")
             shipp.innerText="Shipping:";
            
             var shipp1=document.createElement("p")
             shipp1.innerText="FREE SHIPPING to";
             shipp1.style.color="green";

             var shipp2=document.createElement("p")
             shipp2.innerText="United States via Standard Shipping";
             shipp2.setAttribute("id","shipp2");


             var div_f=document.createElement("div");
             div_f.setAttribute("id","div_f");

             var qty=document.createElement("p");
             qty.innerText="QTY:"

             var btn_div=document.createElement("button");
             btn_div.innerText="-";
             btn_div.setAttribute("id","btn_div")

             var btn_div2=document.createElement("button");
             btn_div2.innerText="1";

             var btn_div1=document.createElement("button");
             btn_div1.innerText="+";
             btn_div1.setAttribute("id","btn_div")

            div2.append(image);
            div3.append(re,re1,re2,re3,namex)
            div4.append(ec,ec1,ec2)
            div5.append(ship,btn_ship)
            div6.append(dis,dis2)
            div7.append(shipp,shipp1,shipp2)
            div_f.append(qty,btn_div,btn_div2,btn_div1)
            div.append(brand, name, about,div3,sh,price2,price,div5,div6,div7,div_f, btn,btn2,div4);
            document.getElementById("containershra").append(div2, div);



        })
    }

    function addToCart(el) {
        cartData.push(el);
        console.log(el);
        localStorage.setItem("CartItems", JSON.stringify(cartData));
        window.location.href = "cart.html";
        // alert("Item added Successfully")

    }
    function  Payment(el){
        window.location.href="Payment.html"
    }

    
     