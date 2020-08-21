var score = 0;
const array = [2,0,1,1,1,0,0,1,2,2,1,1,0,2,0]
document.getElementById("btn").addEventListener("click",()=>{
    score=0;
    for(var j=1;j<=15;j++){
        var correct = document.querySelectorAll('input[name="q'+j+'"]');
        for(var i=0;i<correct.length;i++){
            if(correct[i].checked){
                if(i == array[j-1]){
                    score++;
                }
                
            }    
        }
    }
    console.log(score);
    document.getElementById("result").classList.add("result");
    document.getElementById("result").innerHTML = "You Score is "+ score;
});


