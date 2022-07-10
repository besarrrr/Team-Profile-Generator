const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');

function startApp(){
    inquirer
        .prompt([
            {
                type: 'checkbox',
                name: 'employee',
                message: 'What type of postion is this for',
                choices: ['Manager', 'Engineer','Intern']
            }
        ])
        .then(data => {
           if (data.employee == 'Manager' ) {
                managerInput();
           }
           else if (data.employee == 'Engineer') {
                engineerInput();
           }
           else if (data.employee == 'Intern') {
                internInput();   
           }
        });

}

function managerInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Employee?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Employee?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is this manager\'s office number?'

            }
        ])
        .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(manager);
        })

}

function engineerInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Employee?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Employee?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this employee\'s github username'

            }
        ])
        .then(data => {
            const engineer= new Engineer(data.name, data.id, data.email, data.github);
            console.log(engineer);
        })
}

function internInput(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Employee?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Employee?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does/did this employee go to school?'

            }
        ])
        .then(data => {
           const intern = new Intern(data.name, data.id, data.email, data.school);
           console.log(intern);
        })
}

startApp();