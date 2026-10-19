let forminputs = document.getElementsByClassName("forminputs");
let messages = document.getElementsByClassName("messages");

function inputcheck(){
    let isvalid = true;

    for(var i=0;i<forminputs.length; i++){
        if(forminputs[i].value.trim() === "" ){
            messages[i].innerText = `${forminputs[i].name} is required`; 
            isvalid =false;
        
        }

        else if(i == 0 && forminputs[i].value.trim().split(/\s+/).length<2){
            messages[i].innerText = `${forminputs[i].name} must contain 2 words`;
            isvalid=false;
            
        }

        else if(i==1 && !forminputs[i].value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            messages[i].innerText = `${forminputs[i].name} must be a valid email`;
            isvalid = false;
          
        }

        else{
            messages[i].innerText = "";
        }

    }

        if(isvalid){
            alert("message submitted successfully");
        }
       


}