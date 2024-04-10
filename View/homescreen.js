homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    <input id="searchbar">
    ${model.app.loggedIn ? '<button id="loginbtn" onclick="profileScreen()">min profil</button>' : '<button id="loginbtn" onclick="logInscreen()">login</button>'}
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    <button id="uploadbtn" onclick="uploadPageView()">upload</button>
    
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <button onclick="adminpanel()">adminpanel</button>
    `
}

function updateview(view) {
    view ? (model.app.currentView = view, window[view]()) : window[model.app.currentView]()
}

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
    if (!model.app.darkmode) {
        app.style.color = 'white'
        app.style.backgroundColor = 'gray'
        model.app.darkmode = true
    } else {
        app.style.color = 'black'
        app.style.backgroundColor = 'white'
        model.app.darkmode = false
    }   
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
        <div id="usercard" onclick="profileScreen(${key})">
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