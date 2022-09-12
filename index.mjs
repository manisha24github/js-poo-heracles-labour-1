// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import Fighter from "./src/Fighter.mjs";

let heracles = new Fighter("Heracles", 20, 6);
heracles.logFighterProps();

let nemeanLion = new Fighter("Nemean Lion", 11, 13);
nemeanLion.logFighterProps();

for (let i = 0; i < 100; i++) {
    if(nemeanLion.life <=0){    
    break
    }
    if(heracles.life <=0)
    {
    break 
    }
    console.log(heracles.fight(nemeanLion));
    console.log(nemeanLion.fight(heracles));
  }  
 
  



