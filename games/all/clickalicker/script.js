let clicknum = 0;
let mult = 1;
let upg1clicksneeded = 5;
let upg2clicksneeded = 500;
let upg3clicksneeded = 5000;
let upg4clicksneeded = 7500;
let nextgoal = 1000;

let lastQRes = null;

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}



function closeQuestions(){
  game = document.getElementById('game');
  game.style.display = "block";
  q = document.getElementById('questions');
  q.style.display = "none";
  ca = document.getElementById("correct");
  ca.id = ca.getAttribute('data-old');
  ca.innerHTML = "No answer...";
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
      if (lastQRes == true){
          mult = mult + 2;
        clicknum = clicknum - upg1clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg1clicksneeded = upg1clicksneeded * 3
        document.getElementById('upg1').innerHTML = ("+2 click intake (" + upg1clicksneeded + " clicks)")
      }
      else {
        clicknum = clicknum - (upg1clicksneeded / 2)
      }
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade2(){
    if (clicknum >= upg2clicksneeded){
      openQuestions();
      if (lastQRes == true){
          mult = mult + 10;
        clicknum = clicknum - upg2clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg2clicksneeded = upg2clicksneeded * 3
        document.getElementById('upg2').innerHTML = ("+10 click intake (" + upg2clicksneeded + " clicks)")
      }
      else {
        clicknum = clicknum - (upg2clicksneeded / 2)
      }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade3(){
    if (clicknum >= upg1clicksneeded){
      openQuestions();
      if (lastQRes == true){
          mult = mult + 50;
        clicknum = clicknum - upg3clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg3clicksneeded = upg3clicksneeded * 3
        document.getElementById('upg3').innerHTML = ("+50 click intake (" + upg3clicksneeded + " clicks)")
      }
      else {
        clicknum = clicknum - (upg3clicksneeded / 2)
      }
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function upgrade4(){
    if (clicknum >= upg4clicksneeded){
      openQuestions();
      if (lastQRes == true){
          mult = mult + 100;
        clicknum = clicknum - upg4clicksneeded
        document.getElementById('btn').innerHTML = clicknum;
        upg4clicksneeded = upg4clicksneeded * 3
        document.getElementById('upg4').innerHTML = ("+100 click intake (" + upg4clicksneeded + " clicks)")
      }
      else {
        clicknum = clicknum - (upg1clicksneeded / 2)
      }
    }
    document.getElementById("currentintake").innerHTML = ("Current intake: " + mult)
}

function checka1() {
    console.log("checka1");
    closeQuestions();
    if (a1.id === "correct"){
      return true;
    }
    return false;
    
}

function checka2() {
  console.log("checka2");
  closeQuestions();
    if(a2.id === "correct")
      return true;
    }
    return false;
} 

function checka3() {
  console.log("checka3");
  closeQuestions();
    if (a3.id === "correct"){
      return true;
    }
    return false;
}

function checka4() {
  console.log("checka4");
  closeQuestions();
    if (a4.id === "correct"){
      return true;
    }
    return false;
}

function openQuestions(){
  console.log("opened questions");
  let rand = getRndInteger(0, 4);
  rand2 = getRndInteger(1, 5);

  console.log("rand is " + rand);
  console.log("rand2 is " + rand2);

  const game = document.getElementById('game');
  game.style.display = "none";
  const q = document.getElementById('questions');
  q.style.display = "block";
  const qtext = document.getElementById('q');
  let qnum = rand2.toString();
  const a = document.getElementsByClassName('a');

  const ans_psblts = [0, 1, 2, 3]
  const ansRands = [];
    for (let i = 0; i < 4; i++) {
      const randIndex = getRndInteger(0, ans_psblts.length);
      ansRands.push(ans_psblts[randIndex]);
      ans_psblts.splice(randIndex, 1);
    }

  fetch('set.json')
  .then(response => response.json())
  .then(data => {
    // Store the parsed JSON data in a variable
    const jsonData = data;
    qtext.innerHTML = jsonData.questions[qnum].text;
    
    
    for (let i = 0; i < 4; i++) {
      a[ansRands[i]].innerHTML = jsonData.questions[qnum].answers["answer" + (i)];
      if (i === 0) {
        a[ansRands[i]].id = "correct";
      }
      a[i].addEventListener('click', () => {
        if (i === 0){
          const isCorrect = checka1();
        }
        if (i === 1){
          const isCorrect = checka2();
        }
        if (i === 2){
          const isCorrect = checka3();
        }
        if (i === 3){
          const isCorrect = checka4();
        }

        lastQRes = isCorrect;
        console.log(lastQRes);
        closeQuestions();
      });
    }
    console.log(a[rand]);

    
        
    
  });
}

function init(){
    document.getElementById("upg2").style.display = "none";
    document.getElementById("upg3").style.display = "none";    
    document.getElementById("upg4").style.display = "none"; 

    document.getElementById("btn").addEventListener("click", lala);
    document.getElementById("upg1").addEventListener("click", upgrade1);
    document.getElementById("upg2").addEventListener("click", upgrade2);
    document.getElementById("upg3").addEventListener("click", upgrade3);
    document.getElementById("upg4").addEventListener("click", upgrade4);
    
    document.getElementById("dbgskip").addEventListener("click", skip);
}