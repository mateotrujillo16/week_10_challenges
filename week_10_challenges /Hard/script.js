//HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
//Create a single function that takes an input className and updates the body's classList to ONLY include that className
//*Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 


// Do Stuff Here
window.updateTheBackground = function(className) {
  let length = document.body.classList.length;

  if (length > 0) {
    let index = document.body.classList.item(0);
    document.body.classList.remove(index)
  }
  document.body.classList.add(className);
  
}

document.body.addEventListener('click', e => {
  if (e.target.id == "red") {
    window.updateTheBackground('bg-red')
  }

  if (e.target.id == "white") {
    window.updateTheBackground('bg-white')
  }
})

// var redButton = document.getElementById("red");

// redButton.addEventListener("click", function () {
//   background.style.background = "red";
  
//   console.log(redButton.classList);
// });

// var whiteButton = document.getElementById("white");

// whiteButton.addEventListener("click", function () {
//   background.style.background = "white";
  
//   console.log(whiteButton.classList);
// });
