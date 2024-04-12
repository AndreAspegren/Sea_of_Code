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
            <div id="adminbuttons">
            <button onclick="hammertime(${key}, 'yay')">YAY👌</button>
            <button onclick="hammertime(${key})">NAY💩</button>
            </div>
            </div>
            <div id="nonadminlist"><div>${gennonadminlist()}</div></div>
            `
        }
    }
    return projects
} 

function hammertime(key, approved){
    approved ? model.data.projects[key]['approved'] = true : model.data.projects.splice(key, 1)
    updateview()
}

function gennonadminlist(){
    let list = ''
    for (let key in model.data.users){
        if (!model.data.adminpanel.users.includes(model.data.users[key].id)){
            list += /*HTML*/`
            <div id="nonadmincard">
            <div>
            <div>${model.data.users[key].username}</div>
            <div>${model.data.users[key].projects.length} prosjekter</div>
            <div>${model.data.users[key].friends.length} venner</div>
            </div>
            <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicure}"/>
            <div>
            <button onclick="makeadmin(${key})">Gi adminmakt🔨</button>
            </div></div>
            </div>
            `
        }
    }
    return list
}

function makeadmin(key){
    model.data.adminpanel.users.push(key)
    updateview()
}