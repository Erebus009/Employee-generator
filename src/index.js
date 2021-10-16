// Import of class functions and dependencies
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

const fs = require("fs");
const path = require('path')
const { log } = require("console");
const questions = require('./questions')
// array to store team members in. 
const Team = [];
//--------------------------------------------
//--------------------------------------------

// function to start collection of data to be used in populating the HTML file. 
function startGetRole() {
  inquirer.prompt(questions.managerQuestions).then((answers) => {
      let name = answers.name;
      let id = answers.id;
      let email = answers.email;
      let officeNumber = answers.officeNumber;

      const manager = new Manager(name,id,email,officeNumber)

      Team.push(manager);


      console.log(manager);
      nextEmployee();
  })
}
function engineerAsk(){
  inquirer.prompt(questions.engineerQuestions).then((answers) => {
    
  })
}





function nextEmployee(){
  inquirer.prompt(next).then((response) => {
    
  })
}


startGetRole();






