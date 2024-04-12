//sende project info til admin panel
//klare ikke sende hvis noe informasjon er ikke der
const projectName = document.getElementById('projectName!').value;
const projectDescription = document.getElementById('projectDescription!').value;

function sendProjectInfo(){
    for(let i in model.input.projects){
    projectName = model.input.projects[i].name;
    projectDescription = model.input.projects[i].description;
   }
}