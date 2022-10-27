const btn = document.getElementById("btn");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
  "square",
  "diamond",
  "pentagon",
  "hexagon",
];
//const colors = ["#00ABB3", "#FF8787", "EDEDED", "#D8D9CF", "#5F9DF7", "#C47AFF"];
//const colors = ["#FFF5E4", "#FFE3E1", "#FFD1D1", "#FF9494", "FFABE1","#FFE6F7","#E26868","#B1B2FF"]
//const colors = ["#7FBCD2","#A5F1E9","#E1FFEE","#FFEEAF"]
//const colors = ["#F5EDDC","#CFD2CF","#FA9494","#EB1D36"]
const colors = ["#FDFDBD","#C8FFD4","#B8E8FC","#B1AFFF"]
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);
    box.classList.add(shapes[i]);
    box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);