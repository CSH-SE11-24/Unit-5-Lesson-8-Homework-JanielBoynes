console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button = document.querySelector("#buttonOne")
console.log(button)

// Select the first p tag under that button
let tag = 
  document.querySelector("#textOne")
console.log(tag)

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
button.addEventListener("click", function(event){
  tag.textContent = "You guessed wrong"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
let button2 = document.querySelector ("#button2")
console.log(button2)

let ptag=document.querySelector("#textTwo")
console.log(ptag)



// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
button2.addEventListener("click",function (event){
ptag.textContent = "You guessed right!"
  
})


// Task 3: Dog image flow
// Select the dog image
let dog = document.querySelector("#dog")
console.log(dog)

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
dog.addEventListener("click",function(event){
  dog.src = "post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this

  



// Task 4: Secret code flow
// Select the input

let input = document.querySelector("#code")
console.log(input)



// Add an event listener to the input such that when a key is pressed, you console log the value
input.addEventListener("click",function(event){
  console.log(input)
})
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




