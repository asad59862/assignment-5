// fix mobile
const cardbtn = document.getElementById("fix-Mobile");
cardbtn.addEventListener("click", function () {
  allwork("fix-Mobile");
})

//Add Dark
const addDark = document.getElementById("addDark");
addDark.addEventListener("click", function () {
  allwork("addDark");
})
// Optimize 
const Optimize  = document.getElementById("Optimize ");
Optimize .addEventListener("click", function () {
  allwork("Optimize ");
})
// Addnew
const Addnew  = document.getElementById("Addnew");
Addnew .addEventListener("click", function () {
  allwork("Addnew");
})
// Integrate
const Integrate  = document.getElementById("Integrate");
Integrate .addEventListener("click", function () {
  allwork("Integrate");
})
// Improve
const Improve  = document.getElementById("Improve");
Improve .addEventListener("click", function () {
  allwork("Improve");
})

// clear history 
const clear = document.getElementById("clear");

clear.addEventListener('click', function () {
  const history = document.getElementById("history");

  if (history) {
    history.innerHTML = ""; // Clears all child elements inside history
  } 
});

// date
const tody = document.getElementById("date");
const d = new Date();
tody.innerHTML = d.toDateString();

// discover
// const question = document.getElementById("discover");
// question.addEventListener("click", function () {
//   window.location.href= "";
// })


// backToDesk
// const back = document.getElementById("backToDesk");
// back.addEventListener("click", function () {
//   window.location.assign("./index.html")
// })




function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("thim").addEventListener("click", function () {
  
    document.body.style.backgroundColor = getRandomColor();
});

