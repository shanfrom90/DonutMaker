class Donut {
    constructor() {
    this.donutCount = 100;

    this.numOfAutoClickers = 0;
    this.autoClickCost = 100;

    this.numofMultipliers = 0;
    this.multiplierCost = 10;

    this.donutsPerClick = Math.pow(1.2, this.numofMultipliers);
    } 
    addOneDonut() {
        this.donutCount++;
    }
    
     getDonutNumber(){
        return this.donutCount;
    }

    getAutoClickCount(){
        return this.numOfAutoClickers;
    }

    getAutoClickCost(){
        return this.autoClickCost;
    }
    increaseAutoClickCost(){
        this.autoClickCost = this.autoClickCost + this.autoClickCost * .1;
    }
    purchaseAutoClick(){
        if(this.donutCount >= this.autoClickCost){
            this.donutCount = this.donutCount - this.autoClickCost;
            this.increaseAutoClickCost();
            this.numOfAutoClickers ++;
            console.log(this.numOfAutoClickers);
        }
        else{
            alert('You need to make more donuts!');
        }
    }
  
    activateAutoClick() {
        this.donutCount = this.donutCount + this.numOfAutoClickers;
    }
    

    getMultiplierCount(){
        return this.numofMultipliers;
    }

    getMultiplierCost(){
        return this.multiplierCost;
    }
    purchaseMultiplier(){
        if(this.donutCount >= this.multiplierCost){
            this.donutCount = this.donutCount - this.multiplierCost;
            this.numofMultipliers ++;
            this.increaseMultiplierCost();
            this.activateMultiplier();
        }
    }
    activateMultiplier(){
        this.donutCount = this.donutCount + this.donutCount * .2;
    }
    increaseMultiplierCost(){
        this.multiplierCost = this.multiplierCost + this.multiplierCost * .1;
    }
    getDonutsPerClick(){
        return this.donutsPerClick;
    }

    
}

