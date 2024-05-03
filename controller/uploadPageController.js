// //sende project info til admin panel
// //klare ikke sende hvis noe informasjon er ikke der
// const projectName = document.getElementById('projectName').value;
// const projectDescription = document.getElementById('projectDescription').value;

async function pushProject() {
    model.data.users[model.app.userID].projects.push(model.data.users[model.app.userID].projects.length);
    model.data.projects.push(
        {
            id: model.data.projects.length,
            approved: model.data.adminpanel.users.includes(model.app.userID) ? true : false,
            name: model.input.projects.name,
            lastUpdated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            dateCreated: new Date().toISOString().substr(0, 16).replace('T', ' '),
            description: model.input.projects.description,
            author: model.app.userID,
            picture: model.input.projects.picture,
            files: await Promise.all(Array.from(document.getElementById('fileUpload').files, (file, i) => {
                if (file) {
                    return new Promise(resolve => {
                        const reader = new FileReader()
                        reader.onload = () => resolve({
                            id: i, 
                            content: reader.result.replace('&' , '&amp').replace('<' , '&lt').replace('>' , '&gt').replace('"' , '&quot').replace("'" , '&#039'), 
                            language: model.input.projects.language, 
                        })
                        reader.readAsText(file)
                    })
                }
            })),
            comments: [],
        },
    )
    model.data.wordCloud[model.input.projects.language ? model.input.projects.language : 'Javascript']++;
    model.input.projects.language = null;
    document.getElementById('fileUpload').value = '';

    let currenttitle = model.data.titles[model.data.users[model.app.userID].title].name;
    let user = model.data.users[model.app.userID];
    let ranks = [0, 1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61];
    let index = ranks.findIndex(ranks => ranks > user.projects.length);
    user.title = index == -1 ? ranks.length - 1 : index - 1;
    let newtitle = model.data.titles[model.data.users[model.app.userID].title].name;
    
    if (newtitle != currenttitle) {
        model.data.users[model.app.userID].notifications.push({
            id: model.data.users[model.app.userID].notifications.length,
            type: 'rankup',
            oldtitle: currenttitle,
            newtitle: newtitle,
            from: model.app.userID,
            dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
            para: `homescreen`, 
        })
    }

    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            model.data.projects[model.data.projects.length - 1].files[0].content = e.target.result;
        };
        reader.readAsText(file);
    }

    updateview('homescreen');
}
