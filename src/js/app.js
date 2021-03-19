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


function UpdateText() {
    donutTotal.innerText = "Donuts: " + donutObj.getDonutNumber().toFixed(2);

    autoClickCost.innerText = donutObj.getAutoClickCost().toFixed(2);
    autoClickerTotal.innerText =  donutObj.getAutoClickCount();

    multiCost.innerText = "Multiplier Cost: " + donutObj.getMultiplierCost().toFixed(2);
    multiTotal.innerText = "Multiplier: " + donutObj.getMultiplierCount().toFixed(2) + "x Donuts";
    
    //dps.innerText = "Donuts Per Second:" + (donutObj.getAutoClickCount() * donutObj.getMultiplierCount());

    } 
UpdateText(); 


