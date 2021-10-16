const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
// module for questions
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");

startGetRole = () => {
  inquirer
    .prompt([
        




      {
        type: "input",
        name: "name",
        message: "Enter the managers name",
        // Validate write later
      },
      {
        type: "input",
        name: "id",
        message: "What is the id number of the manager?",
        validate: (id) => { if(isNaN(id) === true ){
            return 'Please enter a number'
        }else {
            return true;
        }
        } 
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the team manager?",
        validate: (email) => {
          if ((email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email))) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office id number of this manager?",
        validate: (officeNumber) => {
          if (officeNumber.length < 6 && !NaN) {
            return "Manager office number must be more than 5 digits";
          } else {
            return true;
          }
        },
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      console.log(manager);
      generateTeam();
    });
    
};

function generateTeam(){
    inquirer.prompt([
        { 
            type : "list",
            name : 'class',
            message: "What role of member do you wish to add?",
            choices: ["Engineer","Intern","I don't want to add any more team members"]
        }
    ]).then((answers)=> {
        if (answers.class === 'Engineer'){
            return inquirer.prompt([
                {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer?'
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Engineer?'
                },
                {
                type: 'input',
                name: 'github',
                message: 'What is the Github of the Engineer?'
                },
                
                
                
            ]).then((name,id,github) => {
                const engineer = new Engineer(name,id,github);
                generateTeam();
            });
        }
        if(answers.class === 'Intern') {
            return inquirer.prompt([])
        }
    
    
    
    
    })
      
}




startGetRole()


