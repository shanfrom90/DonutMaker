const donutObj = new Donut();
const donutButton = document.getElementById('donutMaker');
const donutTotal = document.getElementById('donutTotal');

const autoClickButton = document.getElementById('autoClicker');
const autoClickerTotal = document.getElementById('autoTotal');
const autoClickCost = document.getElementById('autoClickCost');

// const multiButton = document.getElementById('multiplier');
// const multiTotal = document.getElementById('multiTotal');
// const multiCost = document.getElementById('multiCost');


const updateDonutTotal = (donutTotal, donutObj)=>{
    donutTotal.innerText = donutObj.getDonutNumber();
}

const autoClicker = setInterval(autoClick, 1000);

 
function autoClick(){
    updateDonutTotal(donutTotal, donutObj);
    donutObj.activateAutoClick();
    //something here to eventually turn on the disabled autoclick button (if they don't have enough?)
    
}



const updateAutoClickTotal = (autoClickerTotal, donutObj) => {
    autoClickerTotal.innerText = Math.round(donutObj.getAutoClickCount());
}

const updateAutoClickCost = (autoClickCost, donutObj) => {
    autoClickCost.innerText = Math.round(donutObj.getAutoClickCost())
}

 
//not sure if this is right

const makeDonutButton = (donutButton, donutTotal, donutObj) =>{
   donutButton.addEventListener('click', ()=>{
        donutObj.addOneDonut();
        updateDonutTotal(donutTotal, donutObj);
    })
} 

const makeAutoClickButton = (autoClickerTotal, autoClickButton, autoClickCost, donutObj)=>{
    autoClickButton.addEventListener('click', ()=>{
        donutObj.purchaseAutoClick();
        updateAutoClickTotal(autoClickerTotal, donutObj);
        donutObj.increaseAutoClickCost(autoClickCost, donutObj);
    })
}

makeDonutButton(donutButton,donutTotal,donutObj);
makeAutoClickButton(autoClickerTotal, autoClickButton, autoClickCost, donutObj);