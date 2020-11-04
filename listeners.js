//monitorEvents(window)

document.write("this is a test")

// window.addEventListener("click", function() {
//     alert("You clicked on the page!");
//   });


// var buton = document.querySelector("button");
// var test = document.querySelector("li")


// console.log(buton)
// console.log(test)

// buton.addEventListener("click", function(){
//   alert("SOMEONE CLICKED THE BUTTON!!");
// });

var logText = function(event) {
  //console.log(event.target.textContent);
  console.log(event)
}

window.addEventListener("click", logText);





