let totalImages   = 3,
        image = 1;

document.addEventListener('keydown', (e) =>{
    if(e.keyCode == '37'){
        decrement();
    }
    else if(e.keyCode == '39'){
        increment();
    }
})
const increment = () =>{
    if(image==totalImages){
        image=1;
    }
    else{
        image++;
    }
    showSlide();
}
const decrement = () =>{
    if(image==1){
        image=totalImages;
    }
    else{
        image--;
    }
    showSlide();
}
const showSlide = () =>{
    
    for(var j=1;j<=totalImages;j++){
        document.getElementById("a"+j).style.display ='none';
    }
    document.getElementById("a"+image).style.display ='inherit';
}
showSlide();

// toggle bar

document.getElementById("toggle").addEventListener("click",()=>{
    var toggleDiv = document.getElementById("redir");
    if(toggleDiv.style.display == "none"){
        toggleDiv.style.display = "inherit";
    }
    else{
        toggleDiv.style.display = "none"
    }
})

// list of cars

document.getElementById("btn-a").addEventListener("click",()=>{
    document.getElementById("l1").style.display = "inherit";
    document.getElementById("l2").style.display = "none";
})
document.getElementById("btn-b").addEventListener("click",()=>{
    document.getElementById("l2").style.display = "inherit";
    document.getElementById("l1").style.display = "none";
})



const navbar      = document.querySelector("nav"),
      navposition = navbar.offsetTop;


document.addEventListener("scroll",()=>{
    if(window.pageYOffset > navposition){
        navbar.classList.add("navbar");
        
    }
    else{
        navbar.classList.remove("navbar")
    }
})