//ASSINGING THE GAME *OBJECT
let game = {
    round: 0,
    targetShip: 0,
    userResponse: "",
  };
  
//ASSIGNING MY SHIP *OBJECT
  let lilMizHuffNPuffs = {
    name: "Lil Miss Puff N Stuff",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack: function () {
      
// ATTACK FUNCTION FOR PLAYER .MATH METHOD
      let attackChance = Math.random();
      if (attackChance <= this.accuracy) {
        return true;
      } else {
        return false;
      }
    },
  };

  
// CLASS FOR ALIENS
  class SpaceRats {
    constructor(name, hull, firePower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firePower = firePower;
      this.accuracy = accuracy;
    }
    attack() {


//ATTACKING FUCNTION FOR THE ALIEN SHIP
      let attackChance = Math.random();
      if (attackChance <= this.accuracy) {
        return true;
      } else {
        return false;
      }
    }
  }

  
// ALIEN SHIP ARRAYS AND LOOPS
  let ratShips = []; 
  let ratHullValues = [3, 4, 5, 6]; 
  let ratFirePowerValues = [2, 3, 4]; 
  let ratAccValues = [0.6, 0.7, 0.8]; 
  

// FLOOR ARRAYS AND THE .MATH METHOD
  let createAlienShips = () => {
    for (let i = 0; i < 6; i++) {
      let name = "Alien Ship " + (i + 1);
      let hull = ratHullValues[Math.floor(Math.random() * 4)];
      let firePower = ratFirePowerValues[Math.floor(Math.random() * 3)];
      let accuracy = ratAccValues[Math.floor(Math.random() * 3)];
      ratShips[i] = new SpaceRats(name, hull, firePower, accuracy); 
    }
  };

  
// CREATING A FUNCTION TO START THE WAR
  let shipsBattle = (ship1, ship2) => {
    let ships = [ship1, ship2];
    let attack = false;
    let attacking = 0;
    let beingAttacked = 1;
    let temp;
    console.log("%c Attack Begins =================", "font-size: 30px");
    while (ships[beingAttacked].hull > 0) {
      if (ships[beingAttacked].hull > 0) {
        
        console.log("\n");
        console.log(
          `%c ${ships[attacking].name} attacked ${ships[beingAttacked].name}`,
          "color: purple; border: 1px solid grey; font-size: 18px;"
        );

        
// PLAYER ATTCKING THE ALIEN SHIP
        attack = ships[attacking].attack();
        if (attack === true) {
          ships[beingAttacked].hull -= ships[attacking].firePower; 
          console.log(
            `%c Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            "color: green; font-weight: bold; font-size: 16px;"
          );
        } else {
          console.log(
            `%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            "color: red; font-size: 16px;"
          );
        }
        

// RESULT IF THE SHIPS ARE DESTROYED
        if (ships[beingAttacked].hull <= 0) {
          console.log(
            `%c ${ships[beingAttacked].name} has been destroyed`,
            
          );
          if (ships[beingAttacked] === lilMizHuffNPuffs) {

            
// LOSER ALIENS KILLED YOU
            alert("God youre a loser");
          } else if (
            ships[beingAttacked].name === ratShips[ratShips.length - 1].name
          ) {
            alert(
              `%c ${ships[beingAttacked].name} destroyed!\n Those nasty rats has been destroyed!\nYou banished them to Uranus`,
             
            );
          } 

// WINER YOU KILLED THE ALIENS
          else {
            game.userResponse = prompt(
              `${ratShips[game.targetShip].name} destroyed!!\n${
                lilMizHuffNPuffs.name
              } Hull: ${
                lilMizHuffNPuffs.hull
              }\nU gonna fight or run away like a baby`,
              ""
            );
            game.targetShip += 1; 


 // DO YOU WANT TO CONTINUE?
            checkUserPrompt();
            return;
          }
        } else {
          
 // SWITCH THE ATTACKING SHIPS
          temp = attacking;
          attacking = beingAttacked;
          beingAttacked = temp;
        }
      }
    }
  };


// CHECKS THE PLAYERS PROMPTS ENDGAME/CONTINUE
  let checkUserPrompt = () => {
    let responseUpperCase = game.userResponse.toUpperCase();
    if (responseUpperCase === "ATTACK") {
      shipsBattle(lilMizHuffNPuffs, ratShips[game.targetShip]);
    } else if (responseUpperCase === "RETREAT") {
      alert("Game Over! You Live to Fight Again Another Day.");
    }
  };
  
  let startGame = () => {
    

// BUILD THE ALIEN FLEET
    createAlienShips();
  
    game.userResponse = prompt(
      "Alien fleet approaching\nWould you like to ATTACK the first ship or RETREAT?",
      ""
    );
    checkUserPrompt();
  };
  
  
// TRY IT OUT
  startGame();