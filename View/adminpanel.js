function adminpanel() {
    app.innerHTML = /*HTML*/`
    <div id="admin">
    ${adminprojects()}
    </div>
    <div id="btnofdoom"></div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}

function adminprojects() {
    let projects = ''
    for (key in model.data.projects) {
        if (!model.data.projects[key].approved) {
            projects += /*HTML*/`
            <div onclick="projectpage(${key})" id="admincard">
            <img src="${model.data.projects[key].picture}"/>
            <div>
            <div>${model.data.users[model.data.projects[key].author].username}</div>
            <div>${model.data.projects[key].name}</div>
            </div>
            <div>${model.data.projects[key].description}</div>
            <div>
            <button onclick="hammertime(${key}, 'yay')">YAY</button>
            <button onclick="hammertime(${key}, 'nay')">NAY</button>
            </div>
            </div>
            `
        }
    }
    return projects
} 

function hammertime(key, status){
    model.data.projects[key].splice(1, 1)
    updateview('homescreen')
}