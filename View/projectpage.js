function projectpage(key, num) {
    if (key == undefined) key = model.input.currentproject;
    model.input.currentproject = key;
    const project = model.data.projects[key];
    const fileIndex = num !== undefined ? num : 0;
    const file = project.files[fileIndex];
    app.innerHTML = /*HTML*/`

    <div id="projectparent">
    <div id="projectinfo">
    <div id="projectdltbtn">${deleteProjectButton(model.data.projects[key].id, model.data.projects[key].author)}</div>
    <div id="projectusername">${model.data.users[model.data.projects[key].author].username}'s prosjekt:</div>
    <div id="projectname"><u>${model.data.projects[key].name}</u></div>
    <div id=projectdescription>Beskrivelse:
    <p>
    ${model.data.projects[key].description}</div>
    <img id="projectimg"src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    <textarea id="fileContentTextarea" readonly>${file.content}</textarea>
    </div>
    <div id="projectbuttons-container">${model.data.projects[key].files.map((file, i) =>
    /*HTML*/`<button id="projectbutton${i}" onclick="projectpage(${key}, ${i})">${i + 1}</button>`
    ).join('')}</div>

    <div id="comments">
    <div>${model.data.projects[key].comments.map(c => {
        let currentclass = c.from == model.app.userID ? 'rightmsg' : 'leftmsg'
        console.log(currentclass)
        return /*HTML*/`<div id="${currentclass}"><div>${model.data.users[c.from].username + ': ' + c.comment}</div></div>`
    }).join('')}</div>
    </div>
    <div id="commentinput">
   <div id="commentinputfield"> ${model.app.loggedIn ? /*HTML*/`<input oninput="model.input.userActivity.comment = this.value" id="commentinput"> </div>
    <button onclick="sendcomment(${key})">Send</button>` : ''}</div>
    </div>
    ${genglobalui()}
    `
    commenteventlistener()
}

function commenteventlistener() {
    document.getElementById('commentinput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') sendcomment()
    })
}

function sendcomment() {
    model.data.projects[model.input.currentproject].comments.push({
        from: model.app.userID,
        dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
        comment: model.input.userActivity.comment
    },)
    model.data.users[model.data.projects[model.input.currentproject].author].notifications.push({
        id: model.data.users[model.data.projects[model.input.currentproject].author].notifications.length,
        type: 'comment',
        from: model.app.userID,
        dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
        para: `projectpage, ${model.input.currentproject}`,
    })
    model.input.userActivity.comment = ''
    updateview()
}



function deleteProjectButton(projectID, authorID) {
    let currentUserId = model.app.userID;
    for (let authorId in model.data.projects) {
        if (model.app.loggedIn == true && model.data.adminpanel.users.includes(currentUserId)) {
            return `<button id="deleteproject" onclick="deleteproject(${projectID})">Slett Prosjekt</button>`;
        } else if (currentUserId === authorID) {
            return `<button id="deleteproject" onclick="deleteproject(${projectID})">Slett Prosjekt</button>`;
        } else {
            return '';
        }
    }
}

function deleteproject(projectID) {
    const projectIndex = model.data.projects.findIndex(p => p.id === projectID);
    let currentUserId = model.app.userID;
    if (projectIndex > -1 && model.data.projects[projectIndex].author === currentUserId) {
        model.data.projects.splice(projectIndex, 1);
        console.log('Project deleted successfully.');
        console.log(model.data.projects);
    } else {
        console.log('Project not found.');
    }
    updateview('homescreen');
    return projectID;
}


