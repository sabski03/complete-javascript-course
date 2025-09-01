// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// // ----- values and variables -----
// console.log('saba');
// console.log(24);

// let firstName = "Saba";
// let age = 24;

// console.log(firstName, age);
// console.log(firstName, age);
// console.log(firstName, age);

// let saba_salo = "SS";
// let $function = 27;

// let person = 'saba';
// let PI = 3.1415;

// let myFirstJob = 'developer';
// let myCurrentJob = 'army';

// console.log(myFirstJob);









// // ----- data types -----

// // Number: Floating point numbers -> let age = 24;
// // String: Sequence of characters -> let firstName = 'Saba';
// // Boolean: Logical type that can be true or false -> let fullAge = true;
// // Undefined: Value taken by a variable that is not yet defined -> let children;
// // Null: Also means 'empty value;
// // Symbol (ES2015): Value that is unique and cannot be changed;
// // BigInt (ES2020): Larger integers than the Number type can hold;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof (true));
// console.log(typeof (javascriptIsFun));
// console.log(typeof (24));
// console.log(typeof ('Saba'));

// javascriptIsFun = 'Yes!';
// console.log(typeof (javascriptIsFun));

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2001;
// console.log(typeof year);

// console.log(typeof null);









// // ----- Let,Const,Var -----

// let age = 30;
// age = 31;

// const birthYear = 2001;
// //birthYear = 2025; //you cannot change a const variable

// //const job; //no empty variables!!!

// var job = 'developer';
// job = 'teacher';

// //lastName = 'Aminashvili'; //this doesnt create a variable so dont do this!!!
// console.log(lastName);









// // ----- Basic Operators -----

// const now = 2025;
// const ageSaba = now - 2001;
// const ageSalo = now - 1997;
// console.log(ageSaba, ageSalo);

// console.log(ageSaba * 2, ageSaba / 10, 2 ** 3);

// const firstName = 'Saba';
// const lastName = 'Aminashvili';
// console.log(firstName + ' ' + lastName);
// console.log(typeof firstName);

// let x = 10 + 5; // x = 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// console.log(ageSaba > ageSalo); // >, <, >=, <=
// console.log(ageSalo >= 10);

// const isFullAge = ageSalo >= 18;









// // ----- Operator Precedence -----

// const now = 2025;
// const ageSaba = now - 2001;
// const ageSalo = now - 1997

// console.log(now - 2001 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageSaba + ageSalo) / 2;
// console.log(ageSaba, ageSalo, averageAge);









// // ----- Coding Challenge #1 -----

// // Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / (height * height)(mass in kg and height in meters).
// // Your task is to write some code to help them:
// // Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// // Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// // Log the value of BMIMark and BMIJohn to the console.
// // BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John.Log it to the console too
// // TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall.John weighs 92 kg and is 1.95 m tall.
// // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.
// // IMPORTANT: The ** operator is not supported in this editor.Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// // result:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);









// // ----- Strings & Template Literals -----

// const firstName = 'Saba';
// const job = 'developer';
// const birthYear = 2001;
// const year = 2025;

// const saba = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(saba);

// const sabaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(sabaNew);

// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`string
//     with
//     multiple
//     lines`);









// // ----- if/else statements -----

// const age = 19;

// if (age >= 18) {
//     console.log("is old enough");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`not old enough please wait ${yearsLeft}`);
// }

// const birthYear = 2001;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);









// // ----- Coding Challenge #2 -----

// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// // 1. Print a nice output to the console, telling the user who has the higher BMI.The message can be either:
// // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
// // 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// // Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// // Note: Don't round the BMI values. Leave them as they are.
// // IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }









// // ----- Type Conversion & Coercion -----

// //javascript can convert to only 3 type -> string, number, boolean

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);

// console.log(Number(inputYear) + 18);

// console.log(Number('Saba')); //NaN Not a Number / Invalid Number

// console.log(String(23), 23);


// console.log('I am ' + 24 + ' years old');
// console.log('24' - '10' - 4);
// console.log('24' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);









// // ----- Truthy & Falsy Values -----

// // There are 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Saba')); //true
// console.log(Boolean({})); //true
// console.log(Boolean('')); //false

// const money = 0;
// if (money) {
//     console.log('dont spend it all');
// } else {
//     console.log("you should get a job");
// }

// let height;
// if (height) {
//     console.log("height is defined");
// } else {
//     console.log("height is undefined");
// }

// let height2 = 0;
// if (height2) {
//     console.log("height is defined");
// } else {
//     console.log("height is undefined");
// }


// let height3 = 123;
// if (height3) {
//     console.log("height is defined");
// } else {
//     console.log("height is undefined");
// }









// // ----- Equality Operators: == vs === -----

// const age = 18;
// if (age === 18) console.log('you just became an adult (strict)');

// if (age == 18) console.log('you just became an adult (loose)');

// const favourite = prompt("What's your favourite number?");

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == Number(favourite)) {
//     console.log(`Cool! ${favourite} is an amazing number!`);
// } else {
//     console.log(`im sorry but 0 is not a number`);
// }


// if (favourite === Number(favourite)) {
//     console.log(`Cool! ${favourite} is an amazing number!`);
// } else {
//     console.log(`im sorry but 0 is not a number`);
// }









// // ----- Logical Operators -----

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("You are ready to drive");
// } else {
//     console.log("You shouldnt drive");
// }

// const isTired = false; //C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("you are good to go");
// } else {
//     console.log("Don't you dare drive");
// }









// // ----- Coding Challenge #3 -----
// //There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// // Your tasks:
// // 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// // 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// // "Dolphins win the trophy" if Dolphins win, or
// // "Koalas win the trophy" if Koalas win, or
// // "Both win the trophy" if their average scores are equal.

// // TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy");
// }









// // ----- Switch Statemenst -----

// const day = 'Wednesday';

// switch (day) {
//     case 'Monday':
//         console.log("Plan my course");
//         console.log("Go to coding meetup");
//         break;
//     case 'Tuesday':
//         console.log("prepare theory videos");
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log("Write code examples");
//         break;
//     case 'Friday':
//         console.log("record videos");
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log("Enjoy the weekend!");
//         break;
//     default:
//         console.log("Not a valid day!");
// }









// // ----- Conditional Operator -----

// const age = 24;
// age >= 18 ? console.log("I am allowed to drink wine") : console.log("I am not allowed to drink wine");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = "wine";
// } else {
//     drink2 = "water";
// }
// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`)









// ----- Coding Challenge #4 -----

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
// TEST DATA: Test with different bill values: 275, 40, and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

































