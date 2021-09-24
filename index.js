var numberofdrums = document.querySelectorAll(".drum").length;

for(var i=0 ;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerHTML);
        btnanimate(this.innerHTML);
    })
}

document.addEventListener("keypress",function(event){
    makesound(event.key); 
    btnanimate(event.key);
});

function makesound(key){
    switch (key) {
        case "w": var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "a": var kick = new Audio("sounds/tom-1.mp3");
        kick.play();
        break;
        case "s": var kick = new Audio("sounds/tom-2.mp3");
        kick.play();
        break;
        case "d": var kick = new Audio("sounds/tom-3.mp3");
        kick.play();
        break;
        case "j": var kick = new Audio("sounds/tom-4.mp3");
        kick.play();
        break;
        case "k": var kick = new Audio("sounds/snare.mp3");
        kick.play();
        break;
        case "l": var kick = new Audio("sounds/crash.mp3");
        kick.play();
        break;
        default:
            break;
    }
}


function btnanimate(currentkey){
     var activebtn = document.querySelector("."+currentkey);
     activebtn.classList.add("pressed");
     setTimeout(function(){
         activebtn.classList.remove("pressed");
     },100);
}