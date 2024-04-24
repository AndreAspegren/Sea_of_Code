// //sende project info til admin panel
// //klare ikke sende hvis noe informasjon er ikke der
// const projectName = document.getElementById('projectName').value;
// const projectDescription = document.getElementById('projectDescription').value;

function sendProjectInfo() { // download :o
    let currentUserId = model.app.userID;
    pushProject();
}

function pushProject() {

    model.data.wordCloud[model.input.projects.language]++
    model.input.projects.language = null
    model.data.users[model.app.userID].projects.push(model.data.users[model.app.userID].projects.length - 1)
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
    checkRank()
    updateview('homescreen')
}

function checkRank() {
    let ranks = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56]
    let projectCount = model.data.users[model.app.userID].projects.length
    let index = ranks.findIndex(rank => projectCount < rank)
    let title = index == -1 ? model.data.titles[ranks.length - 1].name : model.data.titles[index - 1].name
    
    model.data.users[model.app.userID].title = title
}


