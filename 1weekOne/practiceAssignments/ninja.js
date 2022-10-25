class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        return console.log(this.name);
    }

    showStats(){
        return console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health = 200, speed = 10, strength = 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        return console.log("Some wise message!")
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();