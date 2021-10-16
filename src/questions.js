// Manager questions ----------------------------------------------------------------------------------------------
module.exports = {


 managerQuestions : [
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
    validate: (id) => {
      if (isNaN(id) === true) {
        return "Please enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the team manager?",
    validate: (email) => {
      if (
        (email =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          ))
      ) {
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
],
// Engineer Questions ------------------------------------------------------------------------

 engineerQuestions : [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of the Engineer?",
    validate: (id) => {
      if (isNaN(id) === true) {
        return "Please enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of this Engineer?",
    validate: (email) => {
      if (
        (email =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          ))
      ) {
        return true;
      } else {
        return "Please enter a valid email address";
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the Github of the Engineer?",
  },
],
// Intern Questions ----------------------------------------------------------------
internQuestions : [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of the Intern?",
    validate: (id) => {
      if (isNaN(id) === true) {
        return "Please enter a number";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of this Intern?",
    validate: (email) => {
      if (
        (email =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          ))
      ) {
        return true;
      } else {
        return "Please enter a valid email address";
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the current school the Intern is in?",
  },
],

next : [
    {
        type:'list',
        name: 'next',
        message: 'Who do you want to add next?',
        choices: ['Intern','Engineer','Completed']


    }
]




}