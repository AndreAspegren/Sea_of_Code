function adminpanel() {
    app.innerHTML = /*HTML*/`
    <div id="admincontainer">

    <div id="nonadminprojects">${adminprojects()}</div>

        <div id="adminlogo">
            <img onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
        </div>

        <div id="adminbuttons">
        <img onclick="darkmode()" src=${model.app.darkmodeurl}>
        <img src="img/mute.png" onclick="mutebtn()">
        </div> 
        
        <div id="nonadminusers">${gennonadminlist()}</div>
        

    </div>
    `
}

function adminprojects() {
    let projects = ''
    for (key in model.data.projects) {
        if (!model.data.projects[key].approved) {
            projects += /*HTML*/`
            <div onclick="updateview('projectpage', ${key})" id="admincard">
            <img src="${model.data.projects[key].picture}"/>

            <div>
            <div>${model.data.users[model.data.projects[key].author].username}</div>
            <div>${model.data.projects[key].name}</div>
            </div>

            <div>${model.data.projects[key].description}</div>
            
            <div id="hammerbuttons">
            <button onclick="hammertime(${key}, 'yay')">YAY👌</button>
            <button onclick="hammertime(${key})">NAY💩</button>
            </div>

            </div>
            `
        }
    }
    return projects
}

function gennonadminlist() {
    let list = '';
    let number = 0;
    for (let key in model.data.users) {
        if (!model.data.adminpanel.users.includes(model.data.users[key].id)) {       
            list += /*HTML*/`
            <div id="nonadmincard" class="nonadmincard">
            <div>
            <div>${model.data.users[key].username}</div>
            <div>${model.data.users[key].projects.length} prosjekter</div>
            <div>${model.data.users[key].friends.length} venner</div>
            </div>
            <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicture}"/>
            <div>
            <button onclick="makeadmin(${key})">Gi adminmakt🔨</button>
            </div>
            `
        }
        number++;
    }
    return list
}

function hammertime(key, approved) {
    approved ? model.data.projects[key]['approved'] = true : model.data.projects.splice(key, 1)
    updateview()
}

function makeadmin(key) {
    model.data.adminpanel.users.push(key)
    updateview()
}