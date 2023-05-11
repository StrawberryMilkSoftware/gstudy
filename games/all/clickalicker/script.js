let clicknum = 0;
let mult = 1;
let upg1clicksneeded = 5;
let upg2clicksneeded = 500;
let upg3clicksneeded = 5000;
let upg4clicksneeded = 7500;
let nextgoal = 1000;

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

function init(){
    document.getElementById("upg2").style.display = "none";
    document.getElementById("upg3").style.display = "none";    
    document.getElementById("upg4").style.display = "none"; 
    document.getElementById("questions").classList.add("hidden");

    document.getElementById("btn").addEventListener("click", lala);
    document.getElementById("upg1").addEventListener("click", upgrade1);
    document.getElementById("upg2").addEventListener("click", upgrade2);
    document.getElementById("upg3").addEventListener("click", upgrade3);
    document.getElementById("upg4").addEventListener("click", upgrade4);
    document.getElementById("a1").addEventListener("click", checkA1);
    document.getElementById("a2").addEventListener("click", checkA2);
    document.getElementById("a3").addEventListener("click", checkA3);
    document.getElementById("a4").addEventListener("click", checkA4);
    document.getElementById("dbgskip").addEventListener("click", skip);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function openQuestions(){
  console.log("opened questions");
  q = document.getElementById('questions');
  a1 = document.getElementById('a1');
  a2 = document.getElementById('a2');
  a3 = document.getElementById('a3');
  a4 = document.getElementById('a4');
  a = [a1, a2, a3, a4];
  rand = getRndInteger(0, 3);
  rand2 = getRndInteger(0, 3);

  console.log("rand is " + rand);
  console.log("rand2 is " + rand2);
  console.log(a[rand]);
  console.log(a);

  if (rand2 == 0) {
    q.innerHTML = "What is 2^2?";
  }
  else if (rand2 == 1) {
    q.innerHTML = "Solve for x: 2x = 6";
  }
  else if (rand2 == 2) {
    q.innerHTML = "a + b = c, a = 15, c = 25, what is a / b.";
  }
  else if (rand2 == 3) {
    q.innerHTML = "What is a median?";
  }

  a[rand].id = "correct";
  console.log("setting display");
  q.classList.remove("hidden");
  console.log("display set");
}

function closeQuestions(){
  q = document.getElementById('questions');
  correct = document.getElementById('correct');

  correct.style.backgroundColor = "#94f79c";
  correct.id = correct.attr('data-oldid');
  console.log("new id is " + correct.id)
  q.style.visibility = "hidden"; 
}


function lala(){
  	clicknum = clicknum + mult;
  	document.getElementById('btn').innerHTML = clicknum;
  	console.log("click");
    if (clicknum >= 1000){
        document.getElementById("upg2").style.display = "block";
        nextgoal = 10000;
        document.getElementById("nextgoal").innerHTML = "Next goal: 10,000"
    }
    if (clicknum >= 10000){
        document.getElementById("upg3").style.display = "block";
        nextgoal = 15000;
        document.getElementById("nextgoal").innerHTML = "Next goal: 15,000"
    }
    if (clicknum >= 15000){
        document.getElementById("upg4").style.display = "block";
        document.getElementById("nextgoal").innerHTML = "All goals reached!"
        document.getElementById("btn").style.backgroundColor = "gold";
    }
}

function skip(){
    clicknum = nextgoal - mult;
    lala()
}

function upgrade1(){
    if (clicknum >= upg1clicksneeded){
      openQuestions();
        mult = mult + 2;
        clicknum = clicknum - upg1clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg1clicksneeded = upg1clicksneeded * 3
        document.getElementById('upg1').innerHTML = ("+2 click intake (" + upg1clicksneeded + " clicks)")
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade2(){
    if (clicknum >= upg2clicksneeded){
        mult = mult + 10;
        clicknum = clicknum - upg2clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg2clicksneeded = upg2clicksneeded * 3
        document.getElementById('upg2').innerHTML = ("+10 click intake (" + upg2clicksneeded + " clicks)")
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade3(){
    if (clicknum >= upg3clicksneeded){
        mult = mult + 50;
        clicknum = clicknum - upg3clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg3clicksneeded = upg3clicksneeded * 3
        document.getElementById('upg3').innerHTML = ("+50 click intake (" + upg3clicksneeded + " clicks)")
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade4(){
    if (clicknum >= upg4clicksneeded){
        mult = mult + 100;
        clicknum = clicknum - upg4clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg4clicksneeded = upg4clicksneeded * 3
        document.getElementById('upg4').innerHTML = ("+100 click intake (" + upg4clicksneeded + " clicks)")
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function checkA1() {
    a = a1;
    if (a.id == "correct") {
      console.log("correct");
      closeQuestions();
    }
    else {
      console.log("incorrect");
      closeQuestions();
    }
}

function checkA2() {
    a = a2;
    if (a.id == "correct") {
      console.log("correct");
      closeQuestions();
    }
    else {
      console.log("incorrect");
      closeQuestions();
    }
}

function checkA3() {
    a = a3;
    if (a.id == "correct") {
      console.log("correct");
      closeQuestions();
    }
    else {
      console.log("incorrect");
      closeQuestions();
    }
}

function checkA4() {
    a = a4;
    if (a.id == "correct") {
      console.log("correct");
      closeQuestions();
    }
    else {
      console.log("incorrect");
      closeQuestions();
    }
}
