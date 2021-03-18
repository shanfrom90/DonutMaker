class Donut {
    constructor() {
    this.donutCount = 0;

    this.numOfAutoClickers = 0;
    this.autoClickcost = 100;

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
        return this.autoClickcost;
    }
    getMulitplierCount(){
        return this.numofMultipliers;
    }
    getMulitplierCost(){
        return this.mulitplierCost;
    }

    getDonutsPerClick(){
        return this.donutsPerClick;
    }
    
}

