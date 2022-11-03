//packages
const inquirer = require('inquirer');
const fs = require('fs');



const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//empt array to hold team members 
myTeam = [];
//todo: add validation
//Make return if person selects no for no new employee

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

    
    .then(({role, name, id, email}) => {
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
        .then (({input, nextEmployee}) => {
          const manager = new Manager (input.name, input.id, input.email, input.officeNumber);
          //adds manager data to myTeam array
          myTeam.push(manager);
          //will restart function if user wants to add another team member
          if (nextEmployee = 'Yes') {
            return employees();
          }
          else console.log(myTeam);
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
          .then ((input, nextEmployee) => {
            const engineer = new Engineer (input.name, input.id, input.email, input.github)
            myTeam.push(engineer);
            if (input.nextEmployee === 'Yes') {
              return employees();
            }
            else console.log(myTeam);  
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
        .then ((input, nextEmployee) => {
          const intern = new Intern (input.name, input.id, input.email, input.school)
          myTeam.push(intern);
          if (input.nextEmployee === 'Yes') {
            return employees();
          }
          else console.log(myTeam);
        })
      }
    })};

employees();

//Create html format
//add validation if I want for user input to ensure it's in proper format  


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>  */}
