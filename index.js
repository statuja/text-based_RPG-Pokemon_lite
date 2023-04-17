class Pokemon {
    constructor(name, length, magic, skills) {
        this.name = name;
        this.magic = length;
        this.magic = magic;
        this.skills = skills
    };
}
const skills = ["run", "sleep", "eat", "wash"];

class AttackSkill {
    constructor (name, damage, quantity) {
        this.name = name;
        this.damage = damage;
        this.quantity = quantity
    }
} 
let lightning = new AttackSkill("lightning", 40, 30);
//type the code here