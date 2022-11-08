//assigning the variable game to these 3 values
let game = {
    round: 0,
    targetShip: 0,
    userResponse: "",
  };
  
//assiging the the variable "user ship" to the 3 values
  let lilMizHuffNPuffs = {
    name: "Lil Miss Puff N Stuff", //name
    hull: 20, //health
    firePower: 5, //firepower
    accuracy: 0.7, //accuracy
    attack: function () { //create a value to attack that is a function
      
// creating a variable inside the attack function to determine if our attack hits or misses
      let attackChance = Math.random(); //this makes the user attack randomn
      if (attackChance <= this.accuracy) { // using this object accuracy follows back to the attack value
        return true;
      } else {
        return false;
      } ///if true it should attack/if false it shouldnt attack
    },
  };

  
// creating a class for the aliens
  class SpaceRats {
    constructor(name, hull, firePower, accuracy) { //using the constructor method to create values
      this.name = name;
      this.hull = hull;
      this.firePower = firePower;
      this.accuracy = accuracy;
    }//asigned the aliens each their own parameter seperate from the 'user' ship
    attack() {//create a method called attack for the aliens to attack


     
      let attackChance = Math.random();//using the attackChance variable again for random attacks
      if (attackChance <= this.accuracy) {//accuracy object again to follow the prev values
        return true;
      } else {
        return false;
      }
    }
  }

  
// creating alien variable and assigning them values for battle
  let ratShips = []; //any
  let ratHullValues = [3, 4, 5, 6]; //must be between 3-6
  let ratFirePowerValues = [2, 3, 4]; //must be between 2-4
  let ratAccValues = [0.6, 0.7, 0.8]; //must be between .6-.
  

// determining how the alien will attack
  let createAlienShips = () => {  //create a variable that generates new ships
    for (let i = 0; i < 6; i++) { //make a for loop that defines i as number in a range less than 6
      let name = "Nasty Rat Alien Ship " + (i + 1); //value for ship regeneration
      let hull = ratHullValues[Math.floor(Math.random() * 4)];//use floor method to return if less than the arguement, mulitplied by the amount of values previously
      let firePower = ratFirePowerValues[Math.floor(Math.random() * 3)];
      let accuracy = ratAccValues[Math.floor(Math.random() * 3)];
      ratShips[i] = new SpaceRats(name, hull, firePower, accuracy); 
    }
  };

  
// create variable for the ships battle
  let shipsBattle = (ship1, ship2) => { //create parameters that are greater than follwiong array
    let ships = [ship1, ship2];
    let attack = false;
    let attacking = 0;
    let beingAttacked = 1;
    let temp;
    console.log("Attack Begins =================");
    while (ships[beingAttacked].hull > 0) {//create a while loop if the hull is greater than 0: true
      if (ships[beingAttacked].hull > 0) {//create a if loop if the hull is lesser than 0:false
        
        console.log("\n");
        console.log( //console log message  on ships attacked
          ` ${ships[attacking].name} attacked ${ships[beingAttacked].name}`
          
        );

        
// PLAYER ATTCKING THE ALIEN SHIP
        attack = ships[attacking].attack();
        if (attack === true) {
          ships[beingAttacked].hull -= ships[attacking].firePower; 
          console.log(
            `Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            
          );
        } else {
          console.log(
            `%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            
          );
        }
        

// RESULT IF THE SHIPS ARE DESTROYED
        if (ships[beingAttacked].hull <= 0) {
          console.log(
            ` ${ships[beingAttacked].name} has been destroyed`,
            
          );
          if (ships[beingAttacked] === lilMizHuffNPuffs) {
            alert("God youre a loser");// if statement for player ship being destroyed
          } else if (
            ships[beingAttacked].name === ratShips[ratShips.length - 1].name
          ) {
            alert(
              `%c ${ships[beingAttacked].name} destroyed!\n Those nasty rats got u!\nlet me call my girl real quick`,
             
            );
          } 

// using else statement if the rats ship was distroyed and prompted on the screen
          else {
            game.userResponse = prompt(
              `${ratShips[game.targetShip].name} destroyed!!\n${
                lilMizHuffNPuffs.name
              } Hull: ${
                lilMizHuffNPuffs.hull
              }\nbye sweetie`,
            );
            game.targetShip += 1;  
            checkUserPrompt(); 
            return;
          }

        } else { 
          temp = attacking;
          attacking = beingAttacked;
          beingAttacked = temp;
        }
      }
    }
  };

// using if else if statement for the player to decided if they will play or leave
startGame();
  let checkUserPrompt = () => {
    let responseUpperCase = game.userResponse.toUpperCase();
    if (responseUpperCase === "Kill") {
      shipsBattle(lilMizHuffNPuffs, ratShips[game.targetShip]);
    } else if (responseUpperCase === "Cry") {
      alert("lol bro, they are just rats, why you scurred");
    }
  };
  // setting function to start the game, create the shits, display the message of the rats
let startGame = () => {
  createAlienShips();

  game.userResponse = prompt(
    "Aw shiddd those NASTY RATS are approaching\nCommander, should we KILL or CRY?",
    ""
  );
  checkUserPrompt();
};
  
  