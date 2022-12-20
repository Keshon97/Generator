const generateTeam = (myTeam) => {

  const addManager = manager => {
    return `
      <div class="card" id = "manager" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-text">${manager.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId}</li>
          <li class="list-group-item"> Email: ${manager.getEmail}</li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div> `;
  };
  
  const addEngineer = engineer => {
    return `
    <div class="card" id = "engineer"style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-text">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: ${engineer.getEmail()}</li>
      <li class="list-group-item">Github: ${engineer.getGithub()}</li>
    </ul>
  </div>`;
  };
  
  const addIntern = intern => {
    return `
    <div class="card" id = "intern" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <h6h6 class="card-text">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: <label for="email">${intern.getShcool()}</label></li>
    </ul>
  </div>  `;
  };

  let teamMembers = [];

  for (let i = 0; i < myTeam.length; i++) {
    let newEmployee = myTeam[i];
    let role = newEmployee.getRole();
    console.log(role);
      if (role === 'Manager') {
        const newManager = addManager(role);
        teamMembers.push(newManager);
      }
      if (role === 'Engineer') {
        const newEngineer = addEngineer(role);
        teamMembers.push(newEngineer);
      }
      if (role === 'Intern') {
        const newIntern = addIntern(role);
        teamMembers.push(newIntern);
      }
    }
 
    let employees = teamMembers.join('');
    console.log(employees);
    let team = templateHTML(employees);
    console.log(team);
    return team;
    
  }

module.exports = myTeam => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header id="top">
        <h1>My Team</h1>
      </header>
      <main>
        ${generateTeam(myTeam)}
      </main>
    <footer>
      <p>I can code!</p>
    </footer>
    <script src = "./index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
  </body>
</html>
  `;
};





