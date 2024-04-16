function adminpanel() {
    app.innerHTML = /*HTML*/`
    <div id="mainDiv">
    <div id="admin">
    ${adminprojects()}
    </div>
    <div id="nonadminlist">${gennonadminlist()}</div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    </div>
    <button id="mutebtn" onclick="mutebtn()">Mute</button>
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
            
            <div id="adminbuttons">
            <button onclick="hammertime(${key}, 'yay')">YAY👌</button>
            <button onclick="hammertime(${key})">NAY💩</button>
            </div>

            </div>
            `
        }
    }
    return projects
}

function hammertime(key, approved) {
    approved ? model.data.projects[key]['approved'] = true : model.data.projects.splice(key, 1)
    updateview()
}

function gennonadminlist() {
    let list = '';
    for (let key in model.data.users) {
        if (!model.data.adminpanel.users.includes(model.data.users[key].id)) {
            list += /*HTML*/`
            <div id="nonadmincard" class="nonadmincard">
            ${model.data.users[key].username}
            ${model.data.users[key].projects.length} prosjekter
            ${model.data.users[key].friends.length} venner
            <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicure}"/>
            <button onclick="makeadmin(${key})">Gi adminmakt🔨</button>  
        </div>
            `
        }
    }
    return list

}

function makeadmin(key) {
    model.data.adminpanel.users.push(key)
    updateview()
}