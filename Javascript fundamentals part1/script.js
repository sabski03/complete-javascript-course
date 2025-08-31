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









// ----- Type Conversion & Coercion -----











































