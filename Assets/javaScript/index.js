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