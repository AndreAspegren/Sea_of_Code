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
    </div>
    
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    <button id="mutebtn" onclick="mutebtn()">Mute</button>
    `
}

function genpageturn(key){
    pages = ''
    for (let i = 0; i < model.data.projects[key].files.length; i++){
       pages += /*HTML*/`<button id="projectbuttons" onclick="projectpage(${key}, ${i})">${i}</button>`
    }
    return pages
}

function gencomments(key){
    return model.data.project[model.data.users[key].project]
        .filter(m => (m.from == 0 || m.from == 1) || (m.to == 0 || m.to == 1))
        .map(m => {
            let currentclass = m.from == model.app.userID ? 'rightmsg' : 'leftmsg'
            return `<div id="${currentclass}">${m.content}</div>`
        })
        .join('');
}
