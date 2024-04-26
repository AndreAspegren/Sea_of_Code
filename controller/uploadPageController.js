// //sende project info til admin panel
// //klare ikke sende hvis noe informasjon er ikke der
// const projectName = document.getElementById('projectName').value;
// const projectDescription = document.getElementById('projectDescription').value;

function sendProjectInfo() { // download :o
    let currentUserId = model.app.userID;
    pushProject();
}

function pushProject() {
    let currenttitle = model.data.titles[model.data.users[model.app.userID].title].name
    model.data.wordCloud[model.input.projects.language ? model.input.projects.language : 'Javascript']++
    model.input.projects.language = null
    model.data.users[model.app.userID].projects.push(model.data.users[model.app.userID].projects.length)
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
    let user = model.data.users[model.app.userID]
    let ranks = [0, 1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61]
    let index = ranks.findIndex(ranks => ranks > user.projects.length)
    user.title = index == -1 ? ranks.length - 1 : index -1
    let newtitle = model.data.titles[model.data.users[model.app.userID].title].name
    if (newtitle != currenttitle) {
        console.log(model.data.users[model.app.userID].notifications)
        model.data.users[model.app.userID].notifications.push({
            type: 'rankup',
            oldtitle: currenttitle,
            newtitle: newtitle,
            from: model.app.userID,
            dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
        })
    }
    updateview('homescreen')
}



