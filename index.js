
// Detecting Button Press on page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        makeSound(this.innerHTML); 
        buttonAnimation(this.innerHTML); 
    });
}

// Dectecting Keyboard Key Press on keyboard

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(Key)
{
    switch (Key) 
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break; 
        default:
            console.log(Key);
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");    // it adds a class to the classlist of selected tag/class which is stored in the variable.

    setTimeout(function(){
        activeButton.classList.remove("pressed");   // it calls a function after a mentioned time, here it is 100 milliseconds
    }, 100);                                        // i.e. 0.1 seconds.            
}