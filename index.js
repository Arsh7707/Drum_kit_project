//button press

for(var i=0 ; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;
     sound(buttonInnerHTML);
    
  });
}
// keyboard press
document.addEventListener("keypress" , function(event){
      sound(event.key);
});
function sound(key) {
  switch(key){
    case "w":
    var audio = new Audio('./Sounds/tom-1.mp3');
    audio.play();  
    break;

    case "a" :
     var tom2 = new Audio('./Sounds/tom-2.mp3');
     tom2.play();
     break;

     case "s" :
     var tom3 = new Audio('./Sounds/tom-3.mp3');
     tom3.play();
     break;

     case "d" :
     var tom4 = new Audio('./Sounds/tom-4.mp3');
     tom4.play();
     break;

     case "j" :
     var snare = new Audio('./Sounds/snare.mp3');
     snare.play();
     break;

     case "k" :
     var kick = new Audio('./Sounds/kick-bass.mp3');
     kick.play();
     break;

     case "l" :
     var crash = new Audio('./Sounds/crash.mp3');
     crash.play();
     break;
  }
}
