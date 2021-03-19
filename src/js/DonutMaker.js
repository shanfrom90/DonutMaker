class Donut {
    constructor() {
    this.donutCount =  0;
    this.donutsPerClick = 1;

    this.numOfAutoClickers = 0;
    this.autoClickCost = 100;

    this.numofMultipliers = 0;
    this.multiplierCost = 10;

    } 
    addOneDonut() {
        this.donutCount+=Math.pow(this.donutsPerClick, this.numofMultipliers);
        this.donutCount = Math.floor(this.donutCount);
    }
    
    getDonutNumber(){
        return this.donutCount;
    }
    
    getDonutsPerClick(){
        return this.donutsPerClick;
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
             //return true;
        }
        //else{
            //return false;
        //}
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
            this.activateMultiplier();
            this.increaseMultiplierCost();
        }
    }
    activateMultiplier(){
        this.donutsPerClick = this.donutsPerClick + this.donutsPerClick * .2;
    }
    increaseMultiplierCost(){
        this.multiplierCost = this.multiplierCost + this.multiplierCost * .1;
    }

    
}

