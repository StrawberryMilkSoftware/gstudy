let clicknum = 0;
let mult = 1;
let upg1clicksneeded = 5;
let upg2clicksneeded = 500;
let upg3clicksneeded = 5000;
let upg4clicksneeded = 7500;
let nextgoal = 1000;


function init(){
    document.getElementById("upg2").style.display = "none";
    document.getElementById("upg3").style.display = "none";    
    document.getElementById("upg4").style.display = "none";    
}

function toggleQuestions(){
  q = document.getElementById('question');
  
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
