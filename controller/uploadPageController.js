// //sende project info til admin panel
// //klare ikke sende hvis noe informasjon er ikke der
// const projectName = document.getElementById('projectName').value;
// const projectDescription = document.getElementById('projectDescription').value;

function sendProjectInfo() { // download :o
    let currentUserId = model.app.userID;
<<<<<<< HEAD
    pushProject();

=======
    if (model.data.adminpanel.users.includes(currentUserId)) {
        pushProjectTrue();
    } else {
        pushProjectFalse();
    }
>>>>>>> 86a257aea9472811b6063da239b262016b04ce53
}

function pushProject() {
    model.data.projects.push(
        {
            id: model.data.users[model.app.userID].projects.length - 1,
            approved: model.data.adminpanel.users.includes(model.app.userID) ? true : false,
            name: model.input.name,
            lastUpdated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            dateCreated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            description: model.input.projects.description,
            author: model.app.userID,
            picture: model.input.projects.picture,
            files: [{
                id: model.app.loggedIn,
                name: '',
                picture: '',
                content: '',
                language: 'Javascript',
                percentEachLanguage: {},
            },],
            comments: [],
        },
    )
    updateview('homescreen')
}


<<<<<<< HEAD
=======
function pushProjectTrue() {
    model.data.wordCloud[model.input.projects.language]++
    model.input.projects.language = null
    model.data.projects.push(
        {
            id: model.data.users[model.app.userID].projects.length - 1,
            approved: true,
            name: model.input.name,
            lastUpdated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            dateCreated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            description: model.input.projects.description,
            author: model.app.userID,
            picture: model.input.projects.picture,
            files: [{
                id: model.app.loggedIn,
                name: '',
                picture: '',
                content: '',
                language: 'Javascript',
                percentEachLanguage: {},
            },],
            comments: [],
        },
    )
    updateview('homescreen')
}
>>>>>>> 86a257aea9472811b6063da239b262016b04ce53
//  model.data.friends: [
// {
//     1: 'Bjarne', 2: Per, friendsSince: 2020-05-05,
//     messages: {

//     }
// }
// ]

// [friendship.user1, friendship.user2].includes('terje', 'pål')