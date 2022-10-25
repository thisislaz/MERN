class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
       super(name,cost);
       this.power = power;
       this.res = res;
    }

    attack(target){
        target.res -= this.power;
    }

}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playedOn(target){
        if(target instanceof Unit){
            if(this.stat == "Resilience"){
                target.res += this.magnitude;
              
            } else if (this.stat == "Power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a Unit!")
        }
    }

}

//adding units
const redBeltNinja = new Unit("Red Belt Ninja", 3 , 3 , 4);
const blackBeltninja = new Unit("Black Belt Ninja", 4, 5, 4);

//adding effects
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3.", "Resilience" , +3);
const promiseRej = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "Resilience" , -2);
const pairProgram = new Effect("Pair Programming", 3, "Increase target's power by 2", "Power" , +2);

//Scenario
hardAlgo.playedOn(redBeltNinja);
promiseRej.playedOn(redBeltNinja);
pairProgram.playedOn(redBeltNinja);
redBeltNinja.attack(blackBeltninja);

console.log(redBeltNinja);
console.log(blackBeltninja);