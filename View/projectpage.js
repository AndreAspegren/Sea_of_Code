function projectpage(key, num){
    console.log(key)
    app.innerHTML = /*HTML*/`
    <div id="projectinfo">
    <div>${model.data.users[model.data.projects[key].author].username}</div>
    <div>${model.data.projects[key].name}</div>
    <img src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    <div>${model.data.projects[key].files[(num ? num : 0)].content}</div>
    <div id="projectbuttons-container">${genpageturn(key)}</div>
    </div>
 

    <div id="comments">
    <div>${gencomments(key)} </div>
    <div id="commentinput">
    ${model.app.loggedIn ? /*HTML*/`<input oninput="model.input.userActivity.comment = this.value">
    <button onclick="sendcomment(${key})">Send</button>`
    : ''}</div>
    </div>
    
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen'); model.input.userActivity.comment = ''" src="img/logo.jpg"/>
    <button id="mutebtn" onclick="mutebtn()">Mute</button>
    `
}

function sendcomment(key) {
    model.data.projects[key].comments.push({
        from: model.app.userID,
        dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
        comment: model.input.userActivity.comment
    },)
    model.input.userActivity.comment = ''
    updateview('projectpage', key)
}

function genpageturn(key){
    pages = ''
    for (let i = 0; i < model.data.projects[key].files.length; i++){
       pages += /*HTML*/`<button id="projectbuttons" onclick="projectpage(${key}, ${i})">${i}</button>`
    }
    return pages
}

function gencomments(key) {    
    return model.data.projects[key].comments.map(c => {
        let currentclass = c.from == model.app.userID ? 'rightmsg' : 'leftmsg'
        return /*HTML*/`
        <div id="${currentclass}"><div>${model.data.users[c.from].username + ': ' + c.comment}</div>
        </div>`
    }).join('')
}

