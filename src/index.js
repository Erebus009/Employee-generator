// Import of class functions and dependencies
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const questions = require('./questions')
const inquirer = require("inquirer");
const { log } = require("console");
const generate = require("../lib/generate")
const fs = require("fs");
const path = require('path')
// array to store team members in. 
const Team = [];
//--------------------------------------------
//--------------------------------------------
// Data to go into html files insaide dist folder.
const exportPATH = path.resolve(__dirname, "dist")
const export_dir = path.join(exportPATH, 'generated.html')



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
// Generate engineer employee -------------------------------------------------------
function engineerAsk(){
  inquirer.prompt(questions.engineerQuestions).then((answers) => {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let github = answers.github;

    const engineer = new Engineer(name,id,email,github)

    Team.push(engineer)
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

    const intern = new Intern(name,id,email,school)

    Team.push(intern)
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
        
        console.log(` Creating HTML file displaying team`);
        teamMaker()
    }
  })
}
// writes data to html.
function teamMaker(){
  fs.writeFile(exportPATH, generate(Team), function(err){
    if(err){
      console.log(err);
    }


  
  })
}


startGetRole();






