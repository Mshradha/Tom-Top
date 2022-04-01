
var Fashion=JSON.parse(localStorage.getItem("front"));
var productArr=  [] ;
    
    showdata(Fashion);
     document.querySelector("h2").innerText=mensFashion.length

    function showdata(Fashion){
        document.getElementById("containershra").innerHTML="";

        Fashion.map(function(el){
            var div=document.createElement("div");
            div.setAttribute("id", "productshra");

            div.addEventListener("click",function(){
                showProduct(el);
            })

          

            var image=document.createElement("img");
            image.setAttribute("src", el.image);

            var brand=document.createElement("p");
            brand.textContent=el.name;
            brand.setAttribute("id","brandshra");

            // var strike= document.createElement("p");
            // strike.textContent=el.Regular_Price;
            // strike.setAttribute("id",strike)

            // var name=document.createElement("p");
            // name.textContent=el.name2;
            // name.setAttribute("id","shra");

            // var colours=document.createElement("p");
            // colours.textContent=el.color;

            var price=document.createElement("p");
            price.textContent=el.price;
            price.setAttribute("id","priceshra");


           
            div.append(image,brand,price);
            document.getElementById("containershra").append(div);
           

        });

        function showProduct(el){
            productArr.push(el);
            el.qty = 1;
            localStorage.setItem("productDetails", JSON.stringify(productArr));
            console.log(productArr)
            window.location.href="Product_setails.html"
        }

    }

    function search(){
        var searchText = document.querySelector("#searchbar").value
         console.log(searchText)
        var filterdata =    Fashion.filter(function(item){
            return item.name.includes(searchText);
    
        })
        console.log(filterdata)
        showdata(filterdata)
    
    }

   