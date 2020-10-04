const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: [
      'Apache',
      'BSD',
      'GPL',
      'LGPL',
      'MIT',
      'Mozilla'
    ]
  },
  {
    type: 'input',
    name: 'installCmd',
    message: 'What command should be run to install dependencies?'
  },
  {
    type: 'input',
    name: 'testCmd',
    message: 'What command should be run to run tests?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(markdown => console.log(markdown));
}

// function call to initialize program
init();
