const operators = ['+', '-', '*', '/'];
for (var i = 0; i < document.querySelectorAll(".buttons button").length; i++) {

    

    
    document.querySelector(".buttons").querySelectorAll("button")[i].addEventListener("click", function() {
        
            if(this.innerHTML === "=") {
                
               try{

                document.querySelector("input").value= eval(document.querySelector("input").value);
                return;
               } catch (error) {
                document.querySelector("input").value = "Error";
                return;
               }
            }
            if(this.innerHTML === "C") {
                document.querySelector("input").value = "";
                return;
            }
            if(operators.includes(this.innerHTML) && document.querySelector("input").value === "") {
                document.querySelector("input").value = document.querySelector("input").value.slice(0, -1);
                return;
            }



            if(operators.includes(document.querySelector("input").value.slice(-1)) && operators.includes(this.innerHTML)) {
                document.querySelector("input").value = document.querySelector("input").value.slice(0, -1) + this.innerHTML;
                return;
            }

            document.querySelector("input").value +=this.innerHTML;
    })

}
console.log(document.querySelector("input").value);
