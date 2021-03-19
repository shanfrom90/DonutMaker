function UpdateText() {
    donutTotal.innerText = "Donuts: " + donutObj.getDonutNumber().toFixed(2);

    autoClickCost.innerText = donutObj.getAutoClickCost().toFixed(2);
    autoClickerTotal.innerText =  donutObj.getAutoClickCount();

    multiCost.innerText = "Multiplier Cost: " + donutObj.getMultiplierCost().toFixed(2);
    multiTotal.innerText = "Multiplier: " + donutObj.getMultiplierCount().toFixed(2) + "x Donuts";
    
    dps.innerText = "Donuts Per Second:" +  donutObj.getDonutsPerClick().toFixed(2);

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
    UpdateText();
    //something here to eventually turn on the disabled autoclick button (if they don't have enough?)
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
        EnableAutoClickButton();
        EnableMultiplierButton();
        UpdateText();
    })
} 

const makeAutoClickButton = (autoClickerTotal, autoClickButton, autoClickCost, donutObj)=>{
    autoClickButton.addEventListener('click', ()=>{
        //add if statement if it returns true (if they have enough autoclickers)
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


