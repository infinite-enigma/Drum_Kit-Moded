//Detection Button Press
const numberOfBDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfBDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
      //   alert("I am clicked");
      //   this.style.color = "white";

      var buttonClicked = this.innerHTML;

      makeSound(buttonClicked);

      buttonAnimation(buttonClicked);
    }
    /* function eventHandler() {
       alert("I am clicked");
     }*/
  );
}

//Detection Keypress
document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);

  // arr and if statement used to solve classList.add to Null Error
  let arr = ["w", "a", "s", "d", "j", "k", "l"];
  if (arr.includes(currentKey)) {
    console.log(currentKey); //Optional

    activeKey.classList.add("pressed");

    setTimeout(() => {
      activeKey.classList.remove("pressed");
    }, 100);
  }
}

// var audio = new Audio('audio_file.mp3');
// audio.play();
