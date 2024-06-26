import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Wellcome to code with Aqsa - currency converter \n"));
//define the list of currencies and thier exchange rate
let exchange_rate = {
    //base currency
    "PKR": 277.70, //pakistan rupees            
    "USD": 1, //united state (Dollar)
    "EUR": 0.9, //European currency(Euro)
    "JYP": 113, //Japenese Currency(Yen)
    "CAD": 1.3, //Canadian dollar
    "AUD": 1.65, //Australlian dollar
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["PKR", "USD", "EUR", "JYP", "CAD", "AUD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["PKR", "USD", "EUR", "JYP", "CAD", "AUD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`converted amount =${chalk.green.bold(converted_amount.toFixed(2))}`);
