const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
// module for questions
const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");

const Team = [];






startGetRole = () => {
  inquirer
    .prompt([
        




      {
        type: "input",
        name: "name",
        message: "Enter the manager of this project's name",
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
      Team.push(manager)
      addMember();
    });
    
};

function addMember(){
    inquirer.prompt([
        { 
            type : "list",
            name : 'class',
            message: "What is the type of team member that you wish to add?",
            choices: ["Engineer","Intern","I do not wish to add any more team members"]
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
                message: 'What is the id of the Engineer?',
                validate: (id) => { if(isNaN(id) === true ){
                    return 'Please enter a number'
                }else {
                    return true;
                }
                }
                },
                {
                type: 'input',
                name: 'github',
                message: 'What is the Github of the Engineer?'
                },
                
                
                
            ]).then(({name,id,github}) => {
                const engineer = new Engineer(name,id,github);
                Team.push(engineer)
                addMember();
            });
        }
        if(answers.class === 'Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the Intern?'
                    },
                    {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of the Intern?',
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
                        message: "What is the email of this Intern?",
                        validate: (email) => {
                          if ((email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email))) {
                            return true;
                          } else {
                            return "Please enter a valid email address";
                          }
                        },
                      },
                    {
                    type: 'input',
                    name: 'school',
                    message: 'What is the current school the Intern is in?'
                    },
            ]).then(({name,id,email,school}) => {
                const intern = new Intern(name,id,email,school)
                Team.push(intern)
                addMember();

            });
    
    
    
        }
        if(answers.class === "I do not wish to add any more team members"){
            console.log(Team)
            return 

        }
    })
      
}




startGetRole()


