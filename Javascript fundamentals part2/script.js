// // ----- Strict Mode -----

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('i can drive');

// // const interface = 'Audio';
// // const private = 666;









// // ----- Functions -----

// function logger() {
//     console.log('My name is Saba');
// }

// // calling / running / invoking - function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);









// // ----- Function Declaration vs Expressions -----

// //function declaration
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// const age1 = calcAge1(2001);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear
// }
// const age2 = calcAge2(2001);

// console.log(age1, age2);









// // ----- Arrow Functions -----

// //Arrow Function
// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2001, 'Saba'));
// console.log(yearsUntilRetirement(1997, 'Salo'));









// // ----- Functions Calling Other Functions -----

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));









// // ----- Reviewing Function -----

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} Retires in ${retirement} Years`;
//     } else {
//         return `${firstName} Has Already Retired`;
//     }
// }

// console.log(yearsUntilRetirement(2001, 'Saba'));
// console.log(yearsUntilRetirement(1921, 'Salo'));









// // ----- Coding Challenge #1 -----

// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// // Your tasks:
// // Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// // TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
//     } else {
//         return `No Team Wins`;
//     }
// }

// //test1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// //test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// console.log(checkWinner(scoreDolphins, scoreKoalas));









// ----- Introduction to Arrays -----










































