//packages
const inquirer = require('inquirer');
const fs = require('fs');
// const { writeFile } = require('fs').promises;

const template = require('./src/html-template');


//imported classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//empt array to hold team members 
const myTeam = [];

//function to gather data on team members
function employees() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "What is your employee's role?",
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])

    .then(( {role}) => {
      console.log(role);
      if (role === 'Manager') {
        return inquirer.prompt
          ([
            {
              type: 'input',
              name: 'name',
              message: "What is your manager's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is your manager's id?",
            },
            {
              type: 'input',
              name: 'email',
              message: "What is your manager's email?",
            },
            {
              type: 'input',
              name: 'officeNumber',
              message: "What is your manager's office number?"
            },
            {
              type: 'list',
              name: 'nextEmployee',
              message: 'Would you like to add another employee?',
              choices: ['Yes', 'No']
            }
          ])
          .then((input, nextEmployee) => {
            console.log('input', input);
            const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
            //adds manager data to myTeam array
            myTeam.push(manager);
            //will restart function if user wants to add another team member
            if (nextEmployee = 'Yes') {
              return employees();
            }
            // else console.log(myTeam);
          })
      }
      else if (role === 'Engineer') {
        return inquirer.prompt
          ([
            {
              type: 'input',
              name: 'name',
              message: "What is your enigneer's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is your engineer's id?",
            },
            {
              type: 'input',
              name: 'email',
              message: "What is your engineer's email?",
            },
            {
              type: 'input',
              name: 'github',
              message: "What is your engineer's GitHub?"
            },
            {
              type: 'list',
              name: 'nextEmployee',
              message: 'Would you like to add another employee?',
              choices: ['Yes', 'No']
            }
          ])
          .then((input, nextEmployee) => {
            console.log('input', input);
            const engineer = new Engineer(input.name, input.id, input.email, input.github)
            myTeam.push(engineer);
            if (input.nextEmployee === 'Yes') {
              return employees();
            }
            // else console.log(myTeam);
          })
      }
      else if (role === 'Intern') {
         return inquirer.prompt
          ([
            {
              type: 'input',
              name: 'name',
              message: "What is your intern's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is your intern's id?",
            },
            {
              type: 'input',
              name: 'email',
              message: "What is your intern's email?",
            },
            {
              type: 'input',
              name: 'school',
              message: "Where did your intern attend school?"
            },
            {
              type: 'list',
              name: 'nextEmployee',
              message: 'Would you like to add another employee?',
              choices: ['Yes', 'No']
            }
          ])
          .then((input, nextEmployee) => {

            console.log('input', input);

            const intern = new Intern(input.name, input.id, input.email, input.school)
            myTeam.push(intern);
            if (nextEmployee === 'Yes') {
              return employees();
            }
            else {
              init();
            }
          })
      }
    })
};
// function init()  {
//   employees()
//     .then((answers) => {
//     console.log('answers', answers)
//       fs.writeFile('./dist/sample.html',
//       template(answers)), (err) => {
//         if (err) {
//           console.log(err)
//         }
//       })
//   }
//     .then(() => 
//       console.log('Your team has been been generated.'))
//     .catch((err) => 
//       console.error(err));
//     };
function init(answers)  {
  // .then((answers) => {
    console.log('answers', answers);
    fs.writeFile('./dist/sample.html', template(answers), (err) => {
      if (err)
        console.log(err);
      else {
        console.log('Your team has been been generated.');
        console.log(fs.readFileSync('./dist/sample.html', 'utf8'));
      }
    });
  // })
};

employees();
console.log(myTeam)
