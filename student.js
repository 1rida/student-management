#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = (chalk.yellowBright(Math.floor(Math.random() * 20000 + 1)));
let myAmount = 100000;
let student = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "write the name of student....",
        validate: function (value) {
            if (value.trim() !== "")
                return true;
            return ("please enter your  non-empty  value");
        }
    },
    {
        name: "course",
        type: "list",
        message: "select your course to enroll....",
        choices: ["HTML", "CSS", "python", "javascript", "typescript"]
    },
]);
const courseFees = {
    "HTML": 5000,
    "CSS": 9000,
    "python": 2000,
    "javascript": 4000,
    "typescript": 3000,
};
console.log((chalk.greenBright) `\n\t${courseFees[student.course]}\n\t`);
// payment method
let payment = await inquirer.prompt([
    {
        name: "method",
        type: "list",
        message: "please select your payment method.....",
        choices: ["easypaisa", "bank transfer", "jazzcash"],
        validate: function (value) {
            if (value.trim() !== "")
                return true;
            return "please fill the non-empty value";
        }
    },
]);
if (payment.method === "bank transfer " || "easypaisa " || "jazzcash") {
    let payFee = await inquirer.prompt({
        name: "fees",
        type: "number",
        message: "enter your amount",
    });
    if (payFee.fees === courseFees.HTML || courseFees.CSS || courseFees.python || courseFees.javascript || courseFees.typescript) {
        myAmount -= payFee.fees;
        console.log(`your remaining amount is ${myAmount}`);
        console.log((chalk.blueBright `\n\tCONGRATULATIONS! you are successfully enrolled in ${student.course}\n\t`));
    }
}
else {
    console.log(chalk.magentaBright("\n\tSORRY! you dont have sufficient amount\n\t"));
}
let confirm = await inquirer.prompt([
    {
        name: "status",
        type: "list",
        message: "what would you like to do next??",
        choices: ["view status", "exit"]
    }
]);
if (confirm.status === "view status") {
    console.log(chalk.bgBlueBright("@**********STATUS***********@"));
    console.log((chalk.magentaBright `STUDENT NAME : ${student.name}`));
    console.log((chalk.gray `STUDENT ID : ${randomNumber}`));
    console.log((chalk.yellowBright `TUTION FEES ${student.course}`));
    console.log((chalk.greenBright `BALANCE : ${myAmount}`));
    console.log(chalk.bgBlueBright("@**********STATUS***********@"));
}
else {
    console.log((chalk.bgBlueBright("\n\tyou exit from student management system\n\t")));
}
