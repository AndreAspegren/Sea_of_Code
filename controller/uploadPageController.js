// //sende project info til admin panel
// //klare ikke sende hvis noe informasjon er ikke der
// const projectName = document.getElementById('projectName').value;
// const projectDescription = document.getElementById('projectDescription').value;

function sendProjectInfo(){
 model.data.projects.push(
    {
        id: model.data.users[model.app.userID].projects.length,
        approved: false,
        name: model.input.name,
        lastUpdated: new Date().toISOString(),
        dateCreated: new Date().toISOString(),
        description: model.input.projects.description,
        author: model.app.userID,
        picture: model.input.projects.picture,
        files: [],
        comments: [],
    },
 )
 updateview('homescreen')   
}

