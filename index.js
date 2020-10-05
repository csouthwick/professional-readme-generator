const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project\'s name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please write a short description of your project');
        return false;
      }
    }
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
    message: 'What command should be run to install dependencies?',
    validate: installCmdInput => {
      if (installCmdInput) {
        return true;
      } else {
        console.log('Please enter the command that should be run to install dependencies');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'testCmd',
    message: 'What command should be run to run tests?',
    validate: testCmdInput => {
      if (testCmdInput) {
        return true;
      } else {
        console.log('Please enter the command that should be run to run tests');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter what the user needs to know about using the repo');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    validate: contributingInput => {
      if (contributingInput) {
        return true;
      } else {
        console.log('Please enter what the user needs to know about contributing to the repo');
        return false;
      }
    }
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(markdown => writeToFile('README.md', markdown));
}

// function call to initialize program
init();
