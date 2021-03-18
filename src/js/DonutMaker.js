class Donut {
    constructor() {
    this.donutCount = 0;

    this.numOfAutoClickers = 0;
    this.autoClickCost = 100;

    this.numofMultipliers = 0;
    this.mulitplierCost = 10;

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
        this.autoClickCost = this.numOfAutoClickers * .1;
    }
    purchaseAutoClick(){
        if(this.donutCount >= this.autoClickCost){
            this.donutCount = this.donutCount - this.autoClickCost;
            this.numOfAutoClickers++;
            this.increaseAutoClickCost();
        }
    }

    activateAutoClick() {
        this.donutCount = this.donutCount + this.numOfAutoClickers;
    }
    
    

    // getMulitplierCount(){
    //     return this.numofMultipliers;
    // }
    // getMulitplierCost(){
    //     return this.mulitplierCost;
    // }
    // //TODO increase multiplier cost, activate multiplier, purchase multiplier
    // getDonutsPerClick(){
    //     return this.donutsPerClick;
    // }

    
}

