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

     

    ])
.then(function(answer){
    console.log(answer);

})

}
startGetRole()
