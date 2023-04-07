// GLOBAL VAR
let selectVal;
let filldArr=[];

// SELECTED ELEMENT FROM DOM 
let selectOps = document.getElementById("selectOptions");
let selectOpsBtn = document.querySelectorAll(".opsBtn");
let optionSelect = document.querySelectorAll(".optionSelect");
let resetOps = document.getElementById("resetOps");
let showOps = document.getElementById("showOps");

// AUDIO VAR
const correct = new Audio("../assets/audio/correct.mp3");
const fault = new Audio("../assets/audio/negative.mp3");

// 1- CHANGE SELECTED OPTION VALUE ON SELECT
selectOps.addEventListener("click", (e) => {
  switch (e.target.dataset.optionval) {
    case "a":
      // CHANGE SELECT VALUE TO SELECTED OPTION
      selectVal = "a";
      // REMOVE CLASS <optionSelected> FROM ALL SELECT OPTION
      selectOpsBtn.forEach((el) => {
        el.classList.remove("selected");
      });
      // ADD CLASS <optionSelected> TO  SELECTED BUTTON
      e.target.classList.add("selected");
      break;
    case "p":
      // CHANGE SELECT VALUE TO SELECTED OPTION
      selectVal = "p";
      // REMOVE CLASS <optionSelected> FROM ALL SELECT OPTION
      selectOpsBtn.forEach((el) => {
        el.classList.remove("selected");
      });
      // ADD CLASS <optionSelected> TO  SELECTED BUTTON
      e.target.classList.add("selected");
      break;
    default:
      selectVal = "";
      break;
  }
});

//2- CHECK IF SELECTED ELEMENT DATA SET EQUAL <selectVal>
optionSelect.forEach((el,i) => {
  el.addEventListener("click", (e) => {
    // CHECK IF SELECTED ELEMENT DOES NOT HAS <filled> CLASS
    if (!el.classList.contains("filled")) {
      if (el.dataset.answer === selectVal) {
        el.innerHTML = `${el.dataset.answer} <span class="tik_Mark"><img src="../assets/images/tikMark-small.png"/></span>`;
        // ADD <filld> CLASS (SELETED)
        el.classList.add("filled");
        // ADD AUDIO CORRECT
        correct.play();
        // RESET <selectVal>
        selectVal = "";
        // REMOVE CLASS <optionSelected> FROM ALL SELECT OPTION
        selectOpsBtn.forEach((el) => {
          el.classList.remove("selected");
        });
        filldArr.push(i)
      } else if(el.dataset.answer !== selectVal && selectVal){
        el.innerHTML = `${selectVal} <span class="tik_Mark"><img class="w-50 ms-4 mb-1" src="../assets/images/false-small.png"/></span>`;
        setTimeout(()=>{
          el.innerHTML ="&nbsp;"
        },1000)
        fault.play();
      }
    }
    if (filldArr.length == 3) {
      showOps.classList.add("hideOps")
    }
  });
});

//4- SHOW CORRECT ANSWERS
const showCorrect = () => {
  if (!showOps.classList.contains("hideOps")) {
     optionSelect.forEach((el) => {
    el.innerHTML = `${el.dataset.answer} <span class="tik_Mark"><img src="../assets/images/tikMark-small.png"/></span>`;
    // ADD <filld> CLASS (SELETED)
    el.classList.add("filled");
    // ADD AUDIO CORRECT
    correct.play();
    // RESET <selectVal>
    selectVal = "";
    // REMOVE CLASS <optionSelected> FROM ALL SELECT OPTION
    selectOpsBtn.forEach((el) => {
      el.classList.remove("selected");
    });
  });
  showOps.classList.add("hideOps")
  }
};
showOps.addEventListener("click", showCorrect);

// RESET OPTIONS
resetOps.addEventListener("click", () => {
  optionSelect.forEach((el) => {
    el.classList.remove("filled");
    el.innerHTML = "&nbsp;";
  });
  selectVal = "";
  //3- REMOVE CLASS <optionSelected> FROM ALL SELECT OPTION
  selectOpsBtn.forEach((el) => {
    el.classList.remove("selected");
  });
  showOps.classList.remove("hideOps")
  filldArr.length = 0;
});

