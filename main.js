// SPACE BATTLE OR RAT SPACE BATTLE???

//psuedocode
//define the game using props
//game formart and ship (objects)
//make an attack function reddit says math.random or math.floor
//make the rat ship use arrays and constructor method
//need to make a function that regenerates rat ships after destroying one 
//something for the battle, a function or something
//make the box for the player to put in responses. a prompt

//define the core things that make the game up
let game = {
  round: 0,
  targetShip: 0,
  userAnswer: "",
};
//add the user ship and core things that the ship needs to do
let lilMizHuffNPuff = {
  name: "Lil Miss Puff N Stuff",
  hull: 20,
  firePower: 5,
  accuracy: 0.7,
  attack: function () {
    let attackChance = Math.random();
    if (attackChance <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  },
};
//add the enemy fleet along with core things
class SpaceRats {
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
  attack() {
    let attackChance = Math.random();
    if (attackChance <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  }
}
//give variables for each enemy ship from above constructor
//enemy attack strength needs to be random but within player guidelines
let ratShips = []; 
let ratHull = [3, 4, 5, 6]; 
let ratFirePower = [2, 3, 4]; 
let ratAcc = [0.6, 0.7, 0.8]; 
let createRatsNests = () => {
  for (let i = 0; i < 6; i++) {
    let name = "Nasty Ass Rat Fleet " + (i + 1);
    let hull = ratHull[Math.floor(Math.random() * 4)];
    let firePower = ratFirePower[Math.floor(Math.random() * 3)];
    let accuracy = ratAcc[Math.floor(Math.random() * 3)];
    ratShips[i] = new SpaceRats(name, hull, firePower, accuracy); 
  }
};
//setting up the battle and assigning specific ships
let spaceBattle = (ufo1, ufo2) => {
  let ships = [ufo1, ufo2];
  let attack = false;
  let attacking = 0;
  let beingAttacked = 1;
  let temp;
  console.log("round one begin");
  while (ships[beingAttacked].hull > 0) {
    if (ships[beingAttacked].hull > 0) {
      console.log("\n");
      console.log(
        ` ${ships[attacking].name} attacked ${ships[beingAttacked].name}`
      );
      //showing on the console when ship is attacked and result
      attack = ships[attacking].attack();
      if (attack === true) {
        ships[beingAttacked].hull -= ships[attacking].firePower; 
        console.log(
          ` yeah boi we got them rats! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`
        );
      } else {
        console.log(
          ` shoot scooter we missed! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`
        );
      }
      // result for when ships are attacked, destroyed, and if the player wins
      if (ships[beingAttacked].hull <= 0) {
        console.log(
          `${ships[beingAttacked].name} has been banished to the shadow realm`
          
        );
        if (ships[beingAttacked] === lilMizHuffNPuff) {
          alert("Game Over!!!");
        } else if (
          ships[beingAttacked].name === ratShips[ratShips.length - 1].name
        ) {
          alert(
            ` ${ships[beingAttacked].name} The rats have been exterminated!\nFlawless Victory`
            
          );
        } 
        //after destroying a ship, will the player continue or quit
        else {
          game.playerResponse = prompt(
            `${ratShips[game.targetShip].name} bye!\n${
              lilMizHuffNPuff.name
            } Hull: ${
              lilMizHuffNPuff.hull
            }\nare you going to KILL or you gonna CRY`,
            ""
          );
          game.targetShip += 1; 
          checkUserAnswer();
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
//options from the players response if they are going to continue or naw
let checkUserAnswer = () => {
  let responseUpperCase = game.playerResponse.toUpperCase();
  if (responseUpperCase === "KILL") {
    spaceBattle(lilMizHuffNPuff, ratShips[game.targetShip]);
  } else if (responseUpperCase === "CRY") {
    alert("Lets see whats behind her Uranus");
  }
};
// console message when user starts up the game
let startGame = () => {
  createRatsNests();
  game.playerResponse = prompt(
    "Aw shiddddd its them fucking Rats again\nCaptain should be Kill or go Cry",
    ""
  );
  checkUserAnswer();
};

startGame();