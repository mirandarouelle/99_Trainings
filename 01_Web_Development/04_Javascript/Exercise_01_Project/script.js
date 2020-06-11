var h3Css = document.querySelector("h3");
var color01 = document.querySelector(".color1");
var color02 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function SetGradient(){
  body.style.background = "linear-gradient(to right, "
                          + color01.value
                          + ", "
                          + color02.value;

  SetH3Element();
}

function SetH3Element(){
  h3Css.textContent = body.style.background;
}

color01.addEventListener("input", SetGradient);
color02.addEventListener("input", SetGradient);
