const generateHTML = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function managerInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee id number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'

            }
        ])
        .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
         team.push(manager); 
         addEmployee();
        })

}

function addEmployee() {
    inquirer
     .prompt([
        {
            type: 'checkbox',
            name: 'employee',
            message: 'What type of postion are you adding to your team?',
            choices: ['Engineer','Intern', 'Done!']
        }
    ])
    .then(data => {
      if (data.employee == 'Engineer') {
            engineerInput();
       }
       else if (data.employee == 'Intern') {
            internInput();   
       }
       else {
         console.log(team)
       }
    })
  }

function engineerInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of this Employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of this Employee?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Employee?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this employee\'s github username?'

            }
        ])
        .then(data => {
            const engineer= new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer); 
            addEmployee();
        })
}

function internInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of this Employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of this Employee?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Employee?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does/did this employee go to school?'

            }
        ])
        .then(data => {
           const intern = new Intern(data.name, data.id, data.email, data.school);
           team.push(intern); 
           addEmployee();
        })
}

managerInput();
