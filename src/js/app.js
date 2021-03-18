const donutObj = new Donut();
const donutButton = document.getElementById('donutMaker');
const autoClickButton = document.getElementById('autoClicker');
const autoClickerTotal = document.getElementById('autoTotal');
const donutTotal = document.getElementById('donutTotal');

const updateTotal = (donutTotal, donutObj)=>{
    donutTotal.innerText = donutObj.getDonutNumber();
}
const makeDonutButton= (donutButton, donutTotal, donutObj) =>{
   donutButton.addEventListener('click', ()=>{
        donutObj.addOneDonut();
        updateTotal(donutTotal, donutObj);
    })
} 
function buyAutoClicker(params) {
    
}

makeDonutButton(donutButton,donutTotal,donutObj);