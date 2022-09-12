/* Fighter class definition */
const MAX_LIFE = 100;  

class Fighter {
    constructor(name,strength,dexterity){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;  
    } 
    
    logFighterProps(){
        let strength = "strength " + this.strength;
        let dexterity = "dexterity " + this.dexterity;
        console.log(this.name, strength, dexterity);
    }

    fight(enemy) {
        enemy.life -= Math.round(Math.random() * 50);
        enemy.life = enemy.life < 0 ? 0 : enemy.life;
        return `${this.name} attacks ${enemy.name}. ${enemy.name}: ${enemy.life}`;
     }
 
}

export default Fighter;

