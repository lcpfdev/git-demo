/*
Activity 1 
Create an array that lists your favourite films, up to. 5 elements.
Add 2 more using a method. Use a loop to cycle through the array. 

let myArray = ['The Shining', 'Superbad', 'IRobot'];
myArray.push('Titanic', 'Paddington Bear')
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
*/

/* 
Activity 2:
Generate 6 random numbers between 1-50 and log them to the console 
for (var i = 1; i <= 6; i++) {
    var a = Math.floor(Math.random() * 50);
      console.log(a)
    }
*/


/* Activity 3:
If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

for(var i = 9; i >= 0; i--){
    console.log(i)
}
*/ 

/* Activity 4
 Displays 4 films stored in an array.
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is Ghostbusters.
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters! 

let myArray = ['The Shining', 'Superbad', 'Ghostbusters', 'School Of Rock'];
if(myArray[2] === 'Ghostbusters') {
    console.log("Yay it's Ghostbusters")
} else {
    console.log("Boo! We want GhostBusters!")
}
*/

/* Activity 5
Generate a random number between 1 and 30 six times.
For each random number generated, check if this number of divisible by 7 or not.
Log out a message to the console if it is divisible by 7 or not 

for (var i = 1; i <= 6; i++) {
    var a = Math.floor(Math.random() * 30);
}
if(a % 7 == 0) {
    console.log(`${a} number is divisible by 7`) 
} else {
    console.log(`${a} number is NOT divisible by 7`)
}
*/ 

/* Acitivty 6
Mututal followers prograam
> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. 
Make sure there are 2 names that are in BOTH arrays.
> Using a nested loop iterate over both arrays and console.log out the matching follower.

const bobsFollowers = ['Jamie', 'Ezra', 'Louis', 'Max'];
const hannahsFollowers = ['Max', 'Dan', 'Jamie', 'Rohan']
for(let i = 0; i < bobsFollowers.length; i++) {
 for(let j = 0; j < hannahsFollowers.length; j++){
   if (bobsFollowers[i] === hannahsFollowers[j]) {
       console.log(`Your matching follower: ${bobsFollowers[i]}`)
   }
 }
}
*/ 




 

















