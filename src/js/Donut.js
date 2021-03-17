class Donut {
    constructor() {
    this.donutCount = 0;
    this.numOfAutoClickers = 0;
    this.numofMultipliers = 0;
    this.donutsPerClick = Math.pow(1.2, this.numofMultipliers);
    } 
    addOneDonut() {
        this.donutCount++;
    }
    
    
     getDonutNumber(){
        return this.donutCount;
    }
    
}

