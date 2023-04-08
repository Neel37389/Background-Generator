var css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const button = document.getElementById("btn");

// Set the background of the body to a linear gradient using the two color inputs
function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

// randomly generates a hex value for color
function randomRGB() {
  var x = Math.round(0xffffff * Math.random()).toString(16);
  var y = 6 - x.length;
  var z = "00000";
  var z1 = z.substring(0, y);
  var color = "#" + z1 + x;
  return color;
}

// button when clicked will set the randomly generated color value to two color inputs. 
button.addEventListener("click", function () {
  color1.value = randomRGB();
  color2.value = randomRGB();
  setGradient();
});

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
