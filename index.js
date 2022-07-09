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
            },
        ])
        .then(data => {
           if (data.employee === 0) {
                managerInput();
           }
           else if (data.employee === 1) {
                engineerInput();
           }
           else if (data.employee === 2) {
                internInput();   
           }
            //const employee = new Employee(data.name, data.id, data.email);
            //console.log(employee.getEmail());
        });

}

// if statement - so like start with employee typr and then if statmetns for line of questions
//each function has thier own inquirer prompt for line of questions 


// {
//     type: 'input',
//     name: 'name',
//     message: 'What is the name of the Employee?'
// },
// {
//     type: 'input',
//     name: 'id',
//     message: 'What is the id of the Employee?'
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'What is the email of the Employee?'
//},

startApp();