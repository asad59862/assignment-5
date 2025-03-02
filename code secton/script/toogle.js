

// string converter
function stringconverter(strintdata) {

  const nav_data = document.getElementById(strintdata).innerHTML;
 const change= parseInt(nav_data);
  return change;
}



// web element add

function webNumberAdd(strintdata, value) {

  document.getElementById(strintdata).innerHTML = value;

}

// drive card's button to parent 
function cardeliment(btnId) {
  const cardinfo = document.getElementById(btnId).parentElement.parentElement.children[1].innerHTML;
  return cardinfo;
  
}

// history add
function addHistoryEliment(cardtilte) {
  let carddata = cardeliment(cardtilte);  
  const time = new Date().toLocaleTimeString();

  document.getElementById("history").innerHTML += 
    `<div class="bg-[#F4F7FF] rounded-2xl p-5 m-3">You have completed the task ${carddata} at ${time}</div>`;
}




// main function
function allwork(cardid) {
  let navInt = stringconverter("nav23");  
  let taskInt = stringconverter("taskAssigned");

 

  navInt = Number(navInt);
  taskInt = Number(taskInt);


  

  alert("Board update successfully");

  if (taskInt === 1) {
    alert("Congratulations You have complited all the current task");
  }

  navInt += 1;  
  taskInt -= 1;  

  console.log(typeof navInt, typeof taskInt);
  console.log("Updated taskInt:", taskInt);

  webNumberAdd("nav23", navInt); 
  webNumberAdd("taskAssigned", taskInt);
  
  addHistoryEliment(cardid);  
  document.getElementById(cardid).disabled = true;
  document.getElementById(cardid).style.backgroundColor ="#F4F7FF" ;

}
