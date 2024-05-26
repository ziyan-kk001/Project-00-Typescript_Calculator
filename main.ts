#! /usr/bin/env node
import inquirer from "inquirer";
console.log("well come my simple calculator");
const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name:"firstnumber"},
    {message: "Enter second number", type: "number", name:"secondnumber"},
    {
        message : "Select one operator",
        type: "list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
// condtional Statement
if (answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}else if(answer.operator === "Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
}else{
    console.log("please select valid operater");
}
