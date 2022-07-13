const createManagerCard = (manager) =>{
    return `
    <div class="card" style="width: 15rem;">
    <div class="card-header bg-success">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.name}</li>
      <li class="list-group-item"> ID: ${manager.id}</li>
      <li class="list-group-item"><a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
    `
}
const createEngineerCard = (engineer) =>{
    return `
    <div class="card" style="width: 15rem;">
    <div class="card-header bg-primary">
      Engineer
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.name}</li>
      <li class="list-group-item"> ID: ${engineer.id}</li>
      <li class="list-group-item"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
    </ul>
  </div>
    `
}
const createInternCard = (intern) =>{
    return  `
    <div class="card" style="width: 15rem;">
    <div class="card-header bg-warning">
      Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.name}</li>
      <li class="list-group-item"> ID: ${intern.id}</li>
      <li class="list-group-item"><a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">${intern.school}</li>
    </ul>
  </div>
    `
}
const insertCards = (team) => {
    const html = [];
   html.push(team.filter(emp => emp.getRole() === 'Manager').map(manager => createManagerCard(manager)));
   html.push(team.filter(emp => emp.getRole() === 'Engineer').map(engineer => createEngineerCard(engineer)).join(""));
   html.push(team.filter(emp => emp.getRole() === 'Intern').map(intern=> createInternCard(intern)).join(""));
   return html.join("")
};

const generateHtml = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>
<header class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Team Profile</h1>
</div>
</header>
<main class= "container d-flex justify-content-around" style="display:flex">
${insertCards(team)}
</main>
</body>
</html>
`
};

module.exports = generateHtml;
