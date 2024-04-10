function projectpage(key){
    app.innerHTML = /*HTML*/`
    <div id="projectinfo">
    <div>${model.data.users[key].username}</div>
    <div>${model.data.projects[key].name}</div>
    <img src="${model.data.projects[key].picture}">
    </div>

    <div id="project">
    
    </div>
    
    <div id="comments">
    
    </div>
    
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}
