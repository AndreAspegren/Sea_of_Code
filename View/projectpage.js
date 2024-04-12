function projectpage(key, num){
    app.innerHTML = /*HTML*/`
    <div id="projectinfo">
    <div>${model.data.users[model.data.projects[key].author].username}</div>
    <div>${model.data.projects[key].name}</div>
    <img src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    <div>${model.data.projects[key].files[(num ? num : 0)].content}</div>
    </div>
    ${genpageturn(key)}

    <div id="comments">
    <div>${model.data.projects[key].comments[0].comment} </div>
    </div>
    
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}

function genpageturn(key){
    pages = ''
    for (let i = 0; i < model.data.projects[key].files.length; i++){
       pages += /*HTML*/`<button id="projectbuttons" onclick="projectpage(${key}, ${i})">${i}</button>`
    }
    return pages
}

