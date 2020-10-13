// NPM Modules
const inquirer = require("inquirer");

function internPrompt() {
  return inquirer.prompt([
    {
      message: "What is your intern's name?",
      name: "name",
    },
    {
      message: "What is your intern's id?",
      name: "id",
    },
    {
      message: "What is your intern's email?",
      name: "email",
    },
    {
      message: "What is your intern's school?",
      name: "school",
    },
  ]);
}

function engineerPrompt() {
  return inquirer.prompt([
    {
      message: "What is your engineer's name?",
      name: "name",
    },
    {
      message: "What is your engineer's id?",
      name: "id",
    },
    {
      message: "What is your engineer's email?",
      name: "email",
    },
    {
      message: "What is your engineer's github?",
      name: "github",
    },
  ]);
}

function addEmployee() {
  return inquirer.prompt([
    {
      type: "list",
      message: "Who would you like to add to the team?",
      name: "engineerOrIntern",
      choices: ["Engineer", "Intern", "Quit"],
    },
  ]);
}

function managerPrompt() {
  return inquirer.prompt([
    {
      message: "What is your manager's name?",
      name: "name",
    },
    {
      message: "What is your manager's id?",
      name: "id",
    },
    {
      message: "What is your manager's email?",
      name: "email",
    },
    {
      message: "What is your manager's office number?",
      name: "officeNumber",
    },
  ]);
}

module.exports = {
  addEmployee,
  internPrompt,
  managerPrompt,
  engineerPrompt,
};