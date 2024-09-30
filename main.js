import inquirer from "inquirer";
console.log("\n\t Welcome to Typescript_Quiz\n");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.Which keyword is used to declare a variable that can be reassigned in TypeScript?",
        choices: ["let", "var", "const", "static"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which keyword is used to inherit a class from another class in TypeScript?",
        choices: ["inherits", "implements", "extends", "instanceof"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.In TypeScript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which of the following characters is commonly allowed in variable in Typescript?",
        choices: ["@", "$", "&", "#"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "let":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "extends":
        console.log("2.Correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case ";":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case "prompt()":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "$":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Score: ${score}`);
