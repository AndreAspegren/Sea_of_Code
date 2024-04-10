function adminpanel() {
    app.innerHTML = /*HTML*/`
    <div id="admin">
    ${adminprojects()}
    </div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
}

function adminprojects() {
    let projects = ''
    console.log('hei')
    for (key in model.data.projects) {
        if (!model.data.projects[key].approved) {
            console.log('hei')
            projects += /*HTML*/`
            <div onclick="projectpage(${key})" id="projectcard">
            <img src="${model.data.projects[key].picture}"/>
            <div>
            <div>${model.data.users[model.data.projects[key].author].username}</div>
            <div>${model.data.projects[key].name}</div>
            </div>
            <div>${model.data.projects[key].description}</div>
            </div>
            `
        }
    }
    return projects
}   