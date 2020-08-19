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