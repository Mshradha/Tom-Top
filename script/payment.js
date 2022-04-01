
    document
    .querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault()

    //   document.querySelector("#otp").addEventListener("click",function(){

        document.querySelector("#inputotpdiv").style="display:block"
        document.querySelector("#otp").value="Place Order"

    //   })

    //    
    document.querySelector("#otp").addEventListener("click",myfunction)
    
    function myfunction()
    {
  
        var input = document.querySelector("#inputotp").value
        var arr = 1234

        console.log(input)


        // console.log(typeof(arr))
        
        if(input==arr)
        {
           
            window.location.href = "payment_successful.html"
      
        }
        else{
            // console.log(arr)
            alert("Invalid OTP!")
        }
        
    }
       
    })
    
    