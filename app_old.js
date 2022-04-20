const fields = document.querySelectorAll(".field");
const start = document.querySelector("button");

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")

let figureSwitch = "circle";

let pickCounter = 0;




start.addEventListener("click", () => {
   singleGame()
   start.style.display ="none";

})

// FUNCTIONS
function startGame (e) {
singleGame();
}

function singleGame(e){

if (pickCounter > 0) return "koniec";

   fields.forEach(field => {
      field.classList.add("hover_on");
      field.style.backgroundColor = "";
   })

   

   fields.forEach(field => field.addEventListener("click", function handle(e) {
      field.removeEventListener("click",handle);
      field.classList.remove("hover_on")
      pickCounter++;
      // field.dataset.figure = figureSwitch;


      console.log("przed: " + figureSwitch)
      switch(figureSwitch) {
         case "circle":
            field.style.backgroundColor = "green";
            field.dataset.figure = figureSwitch;
            figureSwitch = "cross"; 
            break;
         case "cross":
            field.style.backgroundColor = "red";
            field.dataset.figure = figureSwitch;
            figureSwitch = "circle"; 
            break;    
      }


// ------------------------------------- CROSSES WIN ------------------------------------------
      if ((one.dataset.figure == two.dataset.figure && three.dataset.figure == two.dataset.figure && two.dataset.figure == "cross") ||

      (four.dataset.figure == five.dataset.figure && six.dataset.figure == five.dataset.figure && five.dataset.figure == "cross") ||
      
      (seven.dataset.figure == eight.dataset.figure && eight.dataset.figure == nine.dataset.figure && nine.dataset.figure == "cross") ||

      (one.dataset.figure == four.dataset.figure && four.dataset.figure == seven.dataset.figure && seven.dataset.figure == "cross") ||

      (two.dataset.figure == five.dataset.figure && five.dataset.figure == eight.dataset.figure && five.dataset.figure == "cross") ||

      (three.dataset.figure == six.dataset.figure && six.dataset.figure == nine.dataset.figure && six.dataset.figure == "cross") ||

      (one.dataset.figure == five.dataset.figure && five.dataset.figure == nine.dataset.figure && five.dataset.figure == "cross") ||

      (seven.dataset.figure == five.dataset.figure && five.dataset.figure == three.dataset.figure && five.dataset.figure == "cross")

      ) {
         fields.forEach(field => removeEventListener("click",handle));
         setTimeout(function () {
            fields.forEach(field => {
               field.style.backgroundColor = "";
               field.dataset.figure = "";
               // field.classList.add("hover_on")
               start.style.display ="flex";
            })
            alert("o kurwa wygral krzyzk");
            return;
         },500)
      }
// ------------------------------------- CIRCLES WIN --------------------------------------
      if ((one.dataset.figure == two.dataset.figure && three.dataset.figure == two.dataset.figure && two.dataset.figure == "circle") ||

      (four.dataset.figure == five.dataset.figure && six.dataset.figure == five.dataset.figure && five.dataset.figure == "circle") ||
      
      (seven.dataset.figure == eight.dataset.figure && eight.dataset.figure == nine.dataset.figure && nine.dataset.figure == "circle") ||

      (one.dataset.figure == four.dataset.figure && four.dataset.figure == seven.dataset.figure && seven.dataset.figure == "circle") ||

      (two.dataset.figure == five.dataset.figure && five.dataset.figure == eight.dataset.figure && five.dataset.figure == "circle") ||

      (three.dataset.figure == six.dataset.figure && six.dataset.figure == nine.dataset.figure && six.dataset.figure == "circle") ||

      (one.dataset.figure == five.dataset.figure && five.dataset.figure == nine.dataset.figure && five.dataset.figure == "circle") ||

      (seven.dataset.figure == five.dataset.figure && five.dataset.figure == three.dataset.figure && five.dataset.figure == "circle")

      )  {
         fields.forEach(field => removeEventListener("click",handle));
         setTimeout(function () {
            fields.forEach(field => {
               // field.style = "";
               // field.dataset.figure = "";
               // field.classList.add("hover_on")
               start.style.display ="flex";
            })
            alert("o kurwa wygralo kolko");
            return;
         },500)
      }
      // singleGame();
      //  return;
}))

}


