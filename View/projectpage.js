function projectpage(key, num){
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
    comments = ''
    console.log(model.data.users[model.data.projects[key].comments.comment.from].profilePicure)
    for (let i = 0; i < model.data.projects[key].comments.length; i++){
        comments += /*HTML*/`
        
        <div>${model.data.projects[key].comments[i].comment}</div>`
     }
     return comments
}

