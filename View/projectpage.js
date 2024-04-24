function projectpage(key, num) {
    if (key == undefined) key = model.input.currentproject
    model.input.currentproject = key
    app.innerHTML = /*HTML*/`

    <div id="projectparent">
    <div id="projectinfo">
    <div>${model.data.users[model.data.projects[key].author].username}</div>
    <div>${model.data.projects[key].name}</div>
    <img src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    <div>${model.data.projects[key].files[(num ? num : 0)].content}</div>
    <div id="projectbuttons-container">${model.data.projects[key].files.map((file, i) =>
    /*HTML*/`<button id="projectbutton${i}" onclick="projectpage(${key}, ${i})">${i}</button>`
    ).join('')}</div>
    </div>
 

    <div id="comments">
    <div>${model.data.projects[key].comments.map(c => {
        let currentclass = c.from == model.app.userID ? 'rightmsg' : 'leftmsg'
        return /*HTML*/`<div id="${currentclass}"><div>${model.data.users[c.from].username + ': ' + c.comment}</div></div>`
    }).join('')}</div>
    <div id="commentinput">
    ${model.app.loggedIn ? /*HTML*/`<input oninput="model.input.userActivity.comment = this.value" id="commentinput">
    <button onclick="sendcomment(${key})">Send</button>` : ''}</div>
    </div>
    </div>
    ${genglobalui()}
    `
    commenteventlistener()
}

function commenteventlistener() {
          document.getElementById('commentinput').addEventListener('keydown', function(event) {
                if (event.key === 'Enter') sendcomment()
            })
}

function sendcomment() {
    model.data.projects[model.input.currentproject ].comments.push({
        from: model.app.userID,
        dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
        comment: model.input.userActivity.comment
    },)
    model.input.userActivity.comment = ''
    updateview()
}

