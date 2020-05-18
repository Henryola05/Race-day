let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
raceNumber += 1000;
if (registeredEarly && age > 18){
  console.log(`Race starts at 9:30am and your number is ${raceNumber}`);
 } else if (age > 18 && !registeredEarly){
  console.log(`Race starts at 11:30am and your number is ${raceNumber}`);
} else if (age < 18){
  console.log(`Race starts at 12:30pm and your number is ${raceNumber}`);
} else{
  console.log(`See the registeration desk`)
} 
