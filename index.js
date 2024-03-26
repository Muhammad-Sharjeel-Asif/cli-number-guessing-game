#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
// console.log(randomNum)
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please Guess the Number between 1 - 6:",
    },
]);
if (answer.userNumber === randomNum) {
    console.log("Congratulations! you have guessed correct number.");
}
else {
    console.log("Sorry, you have guessed the wrong number! \n \t Please try again.");
}
