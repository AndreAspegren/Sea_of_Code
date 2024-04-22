updateview('homescreen')
function homescreen() {
    app.innerHTML = /*HTML*/`
    <div id="homecontainer">
    <div id="homelogo">
    <img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
    </div>
    
    <div id="homesearchbar">
    <span>
    <input type="text" placeholder="Søk..." id="searchbar" onchange="searchbar()" />
    <button onclick="searchbar()">Søk</button>
    </span>
    </div>

    <div id="homebuttons">
    ${model.app.loggedIn ? `<button id="loginbtn" onclick="updateview('profileScreen', ${model.app.userID})">min profil</button>` : '<button id="loginbtn" onclick="logInscreen()">login</button>'}
    ${model.app.loggedIn ? '<button id="uploadbtn" onclick="uploadPageView()">upload</button>' : ''}
    <img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
    ${admin()}
    <button id="mutebtn" onclick="mutebtn()">Mute</button>
    </div>
    
    <div style="grid-area: users">
    <div id="userlist"><div>${genuserlist()}</div></div>
    </div>
    
    
    <div style="grid-area: projects">
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <div id="searchResults"></div>
    </div>

    <div style="grid-area: wordcloud">
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    </div>

    </div>
    `
}

function updateview(newview, key) {
    newview ? (model.app.currentView = newview, window[newview](key)) : window[model.app.currentView](key)
}

function mutebtn() {
    yarr.paused ? yarr.play() : yarr.pause()
}

function genprojectlist() {
    userlist = ''
    for (key in model.data.projects) {
        if (model.data.projects[key].approved) {
            userlist += /*HTML*/`
            <div onclick="updateview('projectpage', ${key})" id="projectcard">
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
    return userlist
}

function darkmode() {
    const mode = model.app.darkmode ? ['white', 'black', false, "img/moon.png"] : ['gray', 'white', true, "img/sun.png"]
    app.style.backgroundColor = mode[0]
    app.style.color = mode[1]
    model.app.darkmode = mode[2]
    model.app.darkmodeurl = mode[3]
    updateview()
}

function genwordcloud() {
    let wordcloudlist = '';
    for (let key in model.data.wordCloud) {
        wordcloudlist += /*HTML*/`
            <div id="wordcloudcard" style="font-size: ${model.data.wordCloud[key] * 50 + 50}%">${key}</div>
            `;
    }
    return wordcloudlist;
}

function genuserlist() {
    userlist = ''
    for (let key in model.data.users) {
        userlist += /*HTML*/`
        <div id="usercard" onclick="updateview('profileScreen', ${key})">
        <div>
        <div>${model.data.users[key].username}</div>
        <div>${model.data.users[key].projects.length} prosjekter</div>
        <div>${model.data.users[key].friends.length} venner</div>
        </div>
        <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicture}"/>
        </div>
        `
    }
    return userlist
}

function admin() {
    let adminButton = '';
        let currentUserId = model.app.userID;
        if(model.data.adminpanel.users.includes(currentUserId)){
            adminButton = `<button onclick="updateview('adminpanel')" id="adminbutton">adminpanel</button>`;
        }
    return adminButton;
}