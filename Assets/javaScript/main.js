const navbar      = document.querySelector("nav"),
      navposition = navbar.offsetTop;


document.addEventListener("scroll",()=>{
    if(window.pageYOffset >=navposition){
        navbar.classList.add("sticky");
        
    }
    else{
        navbar.classList.remove("sticky")
    }
})


// Contact us

document.getElementById("submit").addEventListener("click", ()=>{
    var name  = document.getElementById("name").value,
        email = document.getElementById("email").value;
        if((name != null && name != "") && (email != null && email != "")){
            alert("Congratulation "+name+" you are Sucessfully Refistered with email id: "+ email);
        }
})