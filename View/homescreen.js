homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    <input type="text" placeholder="Søk..." id="searchbar" onchange="searchbar()" />
    <div id="searchResults"></div>
    ${model.app.loggedIn ? `<button id="loginbtn" onclick="updateview('profileScreen', ${model.app.userID})">min profil</button>` : '<button id="loginbtn" onclick="logInscreen()">login</button>'}
    ${model.app.loggedIn ? '<button id="uploadbtn" onclick="uploadPageView()">upload</button>' : ''}
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <button onclick="updateview('adminpanel')" id="adminbutton">adminpanel</button>
    <button id="mutebtn" onclick="mutebtn()">Mute</button>
    `
}

function updateview(newview, key) {
    newview ? (model.app.currentView = newview, window[newview](key)) : window[model.app.currentView](key)
}

function mutebtn(){
    yarr.paused ? yarr.play() : yarr.pause() 
}

model.data.users
function genprojectlist(){
    userlist = ''
    for (key in model.data.projects){
        if (model.data.projects[key].approved){
            userlist += /*HTML*/`
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
    return userlist
}

function darkmode() {
    const mode = model.app.darkmode ? ['white', 'black', false] : ['gray', 'white', true]
    app.style.backgroundColor = mode[0]
    app.style.color = mode[1]
    model.app.darkmode = mode[2]
}

function genwordcloud() {
    let wordcloudlist = '';
    for (let key in model.data.wordCloud) {
            wordcloudlist += /*HTML*/`
            <div id="wordcloudcard" style="font-size: ${model.data.wordCloud[key] * 50}%">${key}</div>
            `;
    }
    return wordcloudlist;
}

function genuserlist(){
    userlist = ''
    for (let key in model.data.users){
        userlist += /*HTML*/`
        <div id="usercard" onclick="updateview('profileScreen', ${key})">
        <div>
        <div>${model.data.users[key].username}</div>
        <div>${model.data.users[key].projects.length} prosjekter</div>
        <div>${model.data.users[key].friends.length} venner</div>
        </div>
        <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicure}"/>
        </div>
        `
    }
    return userlist
}