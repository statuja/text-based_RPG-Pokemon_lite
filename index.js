class AttackSkill {
    constructor (name, damage, magic) {
        this.name = name;
        this.damage = damage;   
        this.magic = magic
    }
};

class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    };
    // add a new attack skill to the skills array
    learnAttackSkill (attackSkill) {
        this.skills.push(attackSkill)
    }
    showStatus () {
        console.log(`${this.name} status: \nhealth: ${this.health} \nmagic: ${this.magic}\n`);
    };
    attack (attackIndex, pokemon) {
        let attack = this.skills[attackIndex];
        //console.log (attack)
        if (!attack) {
            console.log(`${this.name} does not have an attack skill\n`);   
            return;
        }
        if (this.magic < attack.magic) {
            console.log(`Not enough magic, cannot launch attack "${attack.name}"!\n`);  
            return;
        }
        if (pokemon.health <= 0) {
            console.log(`${pokemon.name} is already dead!\n`); 
            return;
        }
        else  {
           console.log(`${this.name} launched attack "${attack.name}" successfully!\n`);
           this.magic -= attack.magic;
           pokemon.health -= attack.damage;
           console.log(`${pokemon.name} got ${attack.damage} damage..\n`)
           if (pokemon.health <= 0) {
           console.log(`${pokemon.name} is killed!\n`);
           }
        } 
    };

    getMagic () {
        const magicRestored = 20;
        //const magicRestored = Math.floor(Math.random()*20)+1;
        this.magic += magicRestored;
        console.log(`${this.name} got ${magicRestored} magic back\n`);
    };
};

// Create a new Pokemon
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);
let mankey = new Pokemon("Mankey", 80, 100);

// Give a Pokemon a new attack skill:
// create an instance of the AttackSkill class
let lightning = new AttackSkill("lightning", 40, 30);
let thunder = new AttackSkill("thunder", 20, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let solarBeam = new AttackSkill("solar beam", 30, 10);
let lowKick = new AttackSkill("low kick", 30, 20);
let inferno = new AttackSkill("inferno", 40, 40);

// pass the instance of AttackSkill class as an argument to the Pokemon's learnAttackSkill method
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(thunder);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(solarBeam);
mankey.learnAttackSkill(lowKick);
mankey.learnAttackSkill(inferno);
console.log (pikachu);
console.log (bulbasaur);
console.log (mankey);

// Attacks were launched
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

pikachu.attack(1,bulbasaur);
bulbasaur.attack(1,pikachu); 

// Check the status after releasing attacks 
pikachu.showStatus();
bulbasaur.showStatus(); 

pikachu.attack(0, bulbasaur); // launch attack is not possible, as magic for the attack is not enough
pikachu.getMagic(); // restore magic 
pikachu.getMagic(); 

pikachu.attack(0, bulbasaur); // pokemon is killed
pikachu.attack(1,bulbasaur); 

bulbasaur.showStatus(); // pokemon got more damage then health he has 

// Attacks were launched 
mankey.attack(2, pikachu);
mankey.attack(0, pikachu);
mankey.attack(1, pikachu); // pokemon is killed

pikachu.showStatus();
mankey.showStatus();

 






