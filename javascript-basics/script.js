// alert("yerp we here")
// console.log("Hello from the console")
// alert("Thanks for visiting")
// document.write


// 1. Display an alert dialog with the content: "Warning! This message will self-destruct in"
// alert("Warning! This message will self-destruct in ")

// // 2. Display a "3... 2... 1..." countdown using 3 alert dialog boxes
// alert("3")
// alert("2")
// alert("1")

// // 3. This statement selects the <h1> element and replaces its text with "BOOM!".
// document.querySelector("h1").textContent = "🔥BOOM!🔥";

// // 4. Log "Message destroyed!" to the console
// console.log("Message destroyed!")


// Variables

// var myName = "Max"

// const 

// strings

// combine string

// const name = prompt("What is your name")
// let message = "Hello " + name + " welcome to my music site "
// message += "I'm so happy that you  came by to visit ,"
// message += name
// message += ". Feel free to come again and listen to more music"

// console.log(message)





// console.log(msg);


// Template Literals
// let firstName = 'Carlos';
// let lastName = 'Salgado';
// let role = 'developer';


// let msg = `${firstName} ${lastName}: ${role.toUpperCase()}`;


// Display the Value of a String on a Page
// const StringToShout = prompt("What do you watn to shout?");
// const shout = StringToShout.toUpperCase();
// const shoutMessage = `<h2>The message to shout is: ${shout}!!!</h2>`

// document.querySelector('main').innerHTML = shoutMessage ;


//  const verb = prompt('Please type a verb ');
//  const adjective = prompt('Please type an adjective ');
//  const noun = prompt('Please type a noun'); 

//  const message = `<p> If ${noun} doesnt like javascript than he his a ${adjective} person and needs to get ${verb} </p> `;

//  document.querySelector('main').innerHTML = message 


// const flavor = 'Blueberry';
// const type = 'Smoothie';
// const price = 4.99;

// const drink = `${flavor} ${type}: $${price} `;

// console.log(drink)

// conditional statement 

// const answer = prompt('which planet is closest to the sun')

// if (answer === 'mercury'){
//     console.log("That's correct !")
// }else {
//     console.log("sorry, that's incorrect")
// }


// const a = 10;
// const b = 20;
// const c = 30;

// if (a > b) {
// 	console.log('a is greater than b');
// } else {
// 	console.log('a is not greater than b');
// }

// Booleans
// let correctGuess = false 

// const number = 7
// const guess = prompt('guess a number between 1 and 10 ')

// if ( +guess === number){
//     correctGuess = true 
// }

// if (correctGuess === true) {
// 	console.log('You guessed the number!');
// } else {
// 	console.log(`Sorry. the number was ${number}`);
// }
// const weather = ""

// if (weather === 'sun'  ){
//     console.log("It's sunny, so I'm going swimming")
// }else if (weather === 'rain'   ){
//     console.log("I stay home and read a book")
// }else if (weather === 'snow'){
//     console.log("I will make a snow angel")
// }else{
//     console.log("I dont know what i'm doing")
// }
// const isAdmin = false;
// const isStudent = false;
// let message;

// if (isAdmin) {
// 	message = 'Welcome admin';
// } else if (isStudent) {
// 	message = 'Welcome student';
// } else {
// 	message = 'Access denied  ';
// }

// console.log(message)

// let correct = 0
// let rank = ""

// const main = document.querySelector('main');

// const answer1 = prompt("Name a programming language that's also a gem ")
// if (answer1.toUpperCase()=== 'RUBY'){
// 	correct += 1
// }
// const answer2 = prompt("Name a programming language that's also a snake ");
// if (answer2.toUpperCase() === 'PYTHON') {
// 	correct += 1;
// }
// const answer3 = prompt("What language do you use to style web pages ?");
// if (answer3.toUpperCase() === 'CSS') {
// 	correct += 1;
// }
// const answer4 = prompt("What language do you use to build the structure of web pages ?");
// if (answer4.toUpperCase() === 'HTML') {
// 	correct += 1;
// }
// const answer5 = prompt("What language do you use to add interactivity to a web ");
// if (answer5.toUpperCase() === 'JAVASCRIPT') {
// 	correct += 1;
// }

// if( correct === 5){
// rank = "Gold"
// }else if (correct >= 3) {
// rank = "Silver"
// }else if (correct >= 2){
// rank = "Bronze"
// }else {
// rank = "None"
// }


// main.innerHTML = `<h2>You got ${correct} out of 5 question correct</h2>
// <p>Crown earnes: <strong>${rank}</strong></p>`;

// const money = 9;
// const today = 'Friday';

// if (money === 10 && today === 'Friday') {
// 	alert('Time to go to the theater.');
// } else if (money >= 50 && today === 'Friday') {
// 	alert('Time for a movie and dinner.');
// } else if (today === 'Friday') {
// 	alert("It's Friday, but I don't have enough money to go out.");
// } else {
// 	alert("This isn't Friday. I need to stay home.");
// }


// const secsPerMin = 60;
// const minsPerHour = 60;
// const hoursPerDay = 24;
// const daysPerWeek = 7;
// const weeksPerYear = 52;

// const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay
// console.log(`There are ${secondsPerDay} seconds in a day `)



// const dieRoll = Math.floor(Math.random() * 6 );
// console.log(`You roll a ${dieRoll}`)

// Collect input from a user
// let user = prompt('Please provide a number')

// // Convert the input to a number
// let useInput = parseInt(user)

// // Use Math.random() and the user's number to generate a random number

// let userRandom = Math.ceil(Math.random()* useInput + 1)
// // Create a message displaying the random number

// console.log(`${userRandom} is a random number between 1 and ${useInput}`);

let greeting = "Hello world"
let firstName = "Max"
let lastName = "Senat"

console.log(`${greeting} ${firstName} ${lastName}`)