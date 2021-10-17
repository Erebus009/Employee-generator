// Import of class functions and dependencies
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const questions = require('./questions')
const inquirer = require("inquirer");
const { log } = require("console");
const fs = require("fs");
const path = require('path');
const { Module } = require("module");
// array to store team members in. 
const Team = [];
let manager
//--------------------------------------------
//--------------------------------------------
// Data to go into html files insaide dist folder.



// function to start collection of data to be used in populating the HTML file. 
function startGetRoles() {
  inquirer.prompt(questions.managerQuestions).then((answers) => {
      let name = answers.name;
      let id = answers.id;
      let email = answers.email;
      let officeNumber = answers.officeNumber;

      manager = new Manager(name,id,email,officeNumber)

      


      console.log(manager);
      nextEmployee();
  })
}
// Generate engineer employee -------------------------------------------------------
function engineerAsk(){
  inquirer.prompt(questions.engineerQuestions).then((answers) => {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let github = answers.github;

    const employee = new Engineer(name,id,email,github)

    Team.push(employee)
    nextEmployee();

  })
}
// Generate Intern Employee ----------------------------------------------------------
function internAsk(){
  inquirer.prompt(questions.internQuestions).then((answers) => {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let school = answers.school;

    const employee = new Intern(name,id,email,school)

    Team.push(employee)
    nextEmployee();

  })
}





function nextEmployee(){
  inquirer.prompt(questions.next).then((response) => {
    switch (response.next) {
      case 'Intern':
        internAsk();
        break;
      case 'Engineer':
        engineerAsk();
        break;
      case 'Completed':
        
        var teamFile = fs.readFileSync('../templates/index.html', 'utf8')

        var managerInfo = fs.readFileSync('../templates/Manager.html', 'utf8');
        managerInfo = managerInfo.replace('{{role}}', manager.getRole());
        managerInfo = managerInfo.replace('{{name}}', manager.getName());
        managerInfo = managerInfo.replace('{{id}}', manager.getId());
        managerInfo = managerInfo.replace('{{email}}', manager.getEmail());
        managerInfo = managerInfo.replace('{{officeNumber}}', manager.getOfficeNumber());
        var card = managerInfo;
        
        
        
       
        teamFile = teamFile.replace('{{cards}}', card);
        fs.writeFileSync('../dist/createdTeam.html', teamFile)
        console.log('Team populated to html file.');
    }
  })
}
// writes data to html.



startGetRoles();
        

        
        


module.exports = Team;



