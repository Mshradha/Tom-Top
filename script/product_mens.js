
var mensFashion=JSON.parse(localStorage.getItem("menFashion"));
var productArr=  [] ;
    
    showdata(mensFashion);
     document.querySelector("h2").innerText=mensFashion.length

    function showdata(mensFashion){
        document.getElementById("containershra").innerHTML="";

        mensFashion.map(function(el){
            var div=document.createElement("div");
            div.setAttribute("id", "productshra");

            div.addEventListener("click",function(){
                showProduct(el);
            })

            var div2=document.createElement("div2");
            div2.setAttribute("id", "imagebox");

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
            price.style.color="#ff6600"
            price.style.fontWeight="700"
            price.style.fontSize="14px"
            price.setAttribute("id","priceshra");


            div2.append(image);
            div.append(div2,brand,price);
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

    function handlePriceSort(){
        var selected = document.querySelector("#priceSort").value;
         if (selected == "high"){
    
            mensFashion.sort(function(a, b){
            return Number(b.price)-Number(a.price)
          });
         }
         if (selected == "low"){
    
            mensFashion.sort(function(a, b){
            return Number(a.price)-Number(b.price)
            });
    
          }
          console.log(mensFashion);
          showdata(mensFashion);
        }

        function search(){
            var searchText = document.querySelector("#searchbar").value
             console.log(searchText)
            var filterdata =    mensFashion.filter(function(item){
                return item.name.includes(searchText);
        
            })
            console.log(filterdata)
            showdata(filterdata)
        
        }