const fields = document.querySelectorAll(".field");
const start = document.querySelector("button");
const starter = document.querySelector(".starter");
const gameboard = document.querySelector(".gameboard");
const resultMessi = document.querySelector(".result_messi");
const resultRonaldo = document.querySelector(".result_ronaldo");
const resultDraw = document.querySelector(".result_draw")
const restart = document.querySelectorAll(".restart");
const messiPlaying = document.querySelector(".current_player_messi");
const ronaldoPlaying = document.querySelector(".current_player_ronaldo");
// const restartRonaldo = document.querySelector(".ronaldoBtn");

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")

let gameOver = false;
let figureSwitch = "circle";

start.addEventListener("click", () => {
   starter.style.display ="none";
   gameboard.style.display = "flex";
   
   prepareDisplay();
   setGameNav();
})
// restart.forEach(btn => btn.addEventListener("click", () => {
//    resetGame();
//    resultMessi.style.display = "none";
//    resultRonaldo.style.display = "none";
//    resultDraw.style.display = "none";
//    gameboard.style.display = "flex";
//    fields.forEach(field => field.addEventListener("click", handle));
//    prepareDisplay();
// }))

   fields.forEach(field => field.addEventListener("click", function handle(e) {
      // field.removeEventListener("click",handle);
      if (field.dataset.figure !== "") return;
      field.classList.remove("hover_on");
      field.dataset.figure = figureSwitch;

      setGameNav(figureSwitch);
      
      switch(figureSwitch) {
         case "circle":
            field.style.content = "url(img/messi.png";
            figureSwitch = "cross";
            break;
         case "cross":

            field.style.content = "url(img/ronaldo.png";
            figureSwitch = "circle"; 
            break;    
      }

      startGame();

   }));

   const startGame = () => {

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
         gameOver = true;
         // fields.forEach(field => removeEventListener("click",handle));
         setTimeout(function () {

            resultRonaldo.style.display = "flex";
            gameboard.style.display = "none";
            
            console.log("po krzyżyku")
            return;
         },0)
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
         gameOver = true;
         // fields.forEach(field => removeEventListener("click",handle));
         setTimeout(function () {

            resultMessi.style.display = "flex";
            gameboard.style.display = "none";

            console.log("po kółku")
            return;
         },0)
      }
   // -------------------------------DRAW-----------------------------
      if ((one.dataset.figure == "circle" || one.dataset.figure == "cross") &&
      (two.dataset.figure == "circle" || two.dataset.figure == "cross") &&
      (three.dataset.figure == "circle" || three.dataset.figure == "cross") &&
      (four.dataset.figure == "circle" || four.dataset.figure == "cross") &&
      (five.dataset.figure == "circle" || five.dataset.figure == "cross") &&
      (six.dataset.figure == "circle" || six.dataset.figure == "cross") &&
      (seven.dataset.figure == "circle" || seven.dataset.figure == "cross") &&
      (eight.dataset.figure == "circle" || eight.dataset.figure == "cross") &&
      (nine.dataset.figure == "circle" || nine.dataset.figure == "cross") &&
      gameOver != true) {

         // fields.forEach(field => removeEventListener("click",handle));
         setTimeout(function () {

            resultDraw.style.display = "flex";
            resultMessi.style.display = "none";
            resultRonaldo.style.display = "none";
            gameboard.style.display = "none";
            console.log("po remisie")
            return;
         },400)
      }
      console.log("po całej funckji")
      return;
   }

restart.forEach(btn => btn.addEventListener("click", () => {
   resetGame();
   resultMessi.style.display = "none";
   resultRonaldo.style.display = "none";
   resultDraw.style.display = "none";
   gameboard.style.display = "flex";
   prepareDisplay();
   setGameNav();
}))

const prepareDisplay = () => {
   fields.forEach(field => {
      field.classList.add("hover_on");
      field.style.content = "";
      field.dataset.figure ="";
      return;
   })
}

const setGameNav = (figureSwitch) => {
   if (figureSwitch == "circle") {
      messiPlaying.classList.remove("currently_playing");
      ronaldoPlaying.classList.add("currently_playing");
   }
   if (figureSwitch == "cross") {
      ronaldoPlaying.classList.remove("currently_playing");
      messiPlaying.classList.add("currently_playing");
   }
} 

const resetGame = () => {
   figureSwitch = "circle";
   fields.forEach (field => {
      field.style.content = "";
      field.dataset.figure ="";

   })
}
