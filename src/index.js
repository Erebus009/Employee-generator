const Manager = require("./lib/Manager.js")
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
// module for questions 
const inquirer = require('inquirer')
const fs = require('fs')

startGetRole(){
    inquirer.prompt([
        {
            type: 'input'
            name: 'name'
        }



    ]
    )


}