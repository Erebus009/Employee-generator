const Manager = require("../lib/Manager")
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
// module for questions 
const inquirer = require('inquirer')
const fs = require('fs')
const { log } = require("console")


startGetRole = () => {
    inquirer .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the managers name'
            // Validate write later
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number of the manager?'
            // Validate write later
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the team manager?'
            // Validate write later
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office id number of this manager?'
            // Validate write later
        },
        

     

    ]).then(({name,id,email,officeNumber}) => {
    const manager = new Manager(name,id,email,officeNumber)
        console.log(manager);
})

}
startGetRole()
