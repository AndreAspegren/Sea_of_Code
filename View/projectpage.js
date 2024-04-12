function projectpage(key){
    console.log(key)
    app.innerHTML = /*HTML*/`
    <div id="projectinfo">
    <div>${model.data.users[model.data.projects[key].author].username}</div>
    <div>${model.data.projects[key].name}</div>
    <img src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    <div>${model.data.projects[key].files[0].content}</div>
    </div>
    <button>page 1</button>
    <button>page 2</button>
    <button>page 3</button>

    <div id="comments">
    <div>${model.data.projects[key].comments[0].comment} </div>
    </div>
    
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}


