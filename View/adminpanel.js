function adminpanel() {
    app.innerHTML = /*HTML*/`
    ${genglobalui()}
    <div id="admincontainer">

    <div id="nonadminprojects">${adminprojects()}</div>
  
        <div id="nonadminusers">${gennonadminlist()}</div>
        
    </div>
    `
}

function adminprojects() {
    return model.data.projects.filter(p => !p.approved).map(p => {
        return `<div onclick="updateview('projectpage', ${p.id})" id="admincard">
        <img src="${p.picture}"/>

        <div>
        <div>${model.data.users[p.author].username}</div>
        <div>${performance.name}</div>
        </div>

        <div>${p.description}</div>
        
        <div id="hammerbuttons">
        <button id="yay" onclick="hammertime(${p.id}, 'yay')">YAY👌</button>
        <button id="nay" onclick="hammertime(${p.id})">NAY💩</button>
        </div>

        </div>`
    }).join('');
}

function gennonadminlist() {
    return model.data.users.filter(u => !model.data.adminpanel.users.includes(u.id)).map(u => {
        return `
        <div id="nonadmincard" class="nonadmincard">
        <div>
        <div>${u.username}</div>
        <div>${u.projects.length} prosjekter</div>
        <div>${u.friends.length} venner</div>
        </div>
        <img style="height: 6vh; width: auto" src="${u.profilePicture}"/>
        <div>
        <button onclick="makeadmin(${u.id}); updateview()">Gi adminmakt🔨</button>
        </div>
        `
    }).join('') +
        model.data.users.filter(u => model.data.adminpanel.users.includes(u.id) && !model.data.superAdmin.users.includes(u.id)).map(u => {
            return `
        <div id="nonadmincard" class="nonadmincard">
        <div>
        <div>${u.username}</div>
        <div>${u.projects.length} prosjekter</div>
        <div>${u.friends.length} venner</div>
        </div>
        <img style="height: 6vh; width: auto" src="${u.profilePicture}"/>
        <div>
        <button onclick="removeAdmin(${u.id})">Fjern admin</button>
        <button onclick="makeSuperAdmin(${u.id})">Gi superadminmakt👑</button>
        </div>
        </div>
        `
        }).join('');
}

function hammertime(key, approved) {
    approved ? model.data.projects[key]['approved'] = true : model.data.projects.splice(key, 1)
    updateview()
}

function makeadmin(key) {
    model.data.adminpanel.users.push(key);
    updateview();
}

function removeAdmin(id) {
    model.data.adminpanel.users = model.data.adminpanel.users.filter(userId => userId !== id);
    updateview();
}

function makeSuperAdmin(id) {
    model.data.adminpanel.users = model.data.adminpanel.users.filter(userId => userId !== id);
    model.data.superAdmin.users.push(id);
    updateview();
}