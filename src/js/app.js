function UpdateText() {
    donutTotal.innerText = "Donuts: " + donutObj.getDonutNumber().toFixed(2);

    autoClickCost.innerText = "AutoClicker Cost: " + donutObj.getAutoClickCost().toFixed(2);
    autoClickerTotal.innerText =  "AutoClickers: " + donutObj.getAutoClickCount();

    multiCost.innerText = "Multiplier Cost: " + donutObj.getMultiplierCost().toFixed(2);
    multiTotal.innerText = "Multiplier: " + donutObj.getMultiplierCount().toFixed(2) + "x Donuts";
    
    dps.innerText = "Donuts Per Second: " +  donutObj.getDonutsPerClick().toFixed(2);

    } 
const donutObj = new Donut();
const donutButton = document.getElementById('donutMaker');
const donutTotal = document.getElementById('donutTotal');
const dps = document.getElementById('dps');

const autoClickButton = document.getElementById('autoClicker');
const autoClickerTotal = document.getElementById('autoTotal');
const autoClickCost = document.getElementById('autoClickCost');

const multiButton = document.getElementById('multiplier');
const multiTotal = document.getElementById('multiTotal');
const multiCost = document.getElementById('multiCost');

const reset = document.getElementById('reset');

const autoClicker = setInterval(autoClick, 1000);

function autoClick(){
    donutObj.activateAutoClick();
    EnableAutoClickButton();
    EnableMultiplierButton();
    UpdateText();
}


function EnableAutoClickButton() {
    if(donutObj.donutCount >= donutObj.autoClickCost){
        autoClickButton.removeAttribute('disabled');
    }

    else{
        autoClickButton.disabled = true;
    }
    
    //need to get it to gray back out when they don't have enough again, else statement doesn't seem to be working
}

function EnableMultiplierButton(){
    if(donutObj.donutCount >= donutObj.multiplierCost){
        multiButton.removeAttribute('disabled');
    }
    else{
        multiButton.disabled = true;
    }
    //need to get it to gray back out when they don't have enough again, else statement doesn't seem to be working

}
const makeDonutButton = (donutButton, donutTotal, donutObj) =>{
   donutButton.addEventListener('click', ()=>{
        donutObj.addOneDonut();
        UpdateText();
    })
} 

const makeAutoClickButton = (autoClickerTotal, autoClickButton, autoClickCost, donutObj)=>{
    autoClickButton.addEventListener('click', ()=>{
        donutObj.purchaseAutoClick();
        UpdateText();
    })
}

const makeMultiButton = (donutObj, multiCost, multiButton, multiTotal) => {
    multiButton.addEventListener('click', () =>{
        donutObj.purchaseMultiplier();
        console.log(multiTotal.innerText);
        UpdateText();
    })
    }

const makeResetButton = () =>{
    reset.addEventListener('click',()=>{
        location.reload();
    })
}


    
makeDonutButton(donutButton,donutTotal,donutObj);
makeAutoClickButton(autoClickerTotal, autoClickButton, autoClickCost, donutObj);
makeMultiButton(donutObj, multiCost, multiButton, multiTotal);
makeResetButton();


UpdateText(); 

var aboutFredModal = document.getElementById("aboutFredModal");
var aboutFredBtn = document.getElementById("aboutFredBtn");
var span = document.getElementsByClassName("close")[0];

var aboutMeModal = document.getElementById("aboutMeModal");
var aboutMeBtn = document.getElementById("aboutMeBtn");
var span1 = document.getElementsByClassName("close")[1];

var inspirationModal = document.getElementById("inspirationModal");
var inspirationBtn = document.getElementById("inspirationBtn");
var span2 = document.getElementsByClassName("close")[2];



aboutFredBtn.onclick = function () {
    aboutFredModal.style.display = "block";
}
span.onclick = function() {
    aboutFredModal.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == aboutFredModal) {
      aboutFredModal.style.display = "none";
    }
  } 
  
abtMeBtn.onclick = function () {
    abtMeModal.style.display = "block";
}
span1.onclick = function() {
    abtMeModal.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == abtMeModal) {
      abtMeModal.style.display = "none";
    }
  } 

  
inspirationBtn.onclick = function () {
    inspirationModal.style.display = "block";
}
span2.onclick = function() {
    inspirationModal.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == inspirationModal) {
        inspirationModal.style.display = "none";
    }
  } 
      
      


