updateview('homescreen')
function homescreen() {
    app.innerHTML = /*HTML*/`
    ${genglobalui()}
    <div id="homecontainer">
    
    <div id="homesearchbar">
    <span>
    <input type="text" placeholder="Søk..." id="searchbar" onchange="searchbar()"/>
    <button style="height: 5vh; width: 5vw" onclick="searchbar()">Søk</button>
    <div id="searchResults"></div>
    </span>
    </div>

    <div id="homebuttons">
    <div id="homebuttonz">
    ${model.app.loggedIn ? `<button id="loginbtn" onclick="updateview('profileScreen', ${model.app.userID})">min profil</button>
                            <button id="loginbtn" onclick="updateview('uploadPageView')">upload</button>` :
            '<button id="loginbtn" onclick="updateview(`logInscreen`)">login</button>'}
    ${admin()}
    </div>
    </div>
    
    <div id="homeuserlist"><div>${genuserlist()}</div></div>
    
    <div id="projects"><div>${genprojectlist()}</div></div>

    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    
    </div>`
    document.getElementById('searchbar').addEventListener('keydown', event => {
        if (event.key === 'Enter') searchbar()
    })
}

function userrank() {
    return `
    <div>${model.data.titles[model.data.users[model.app.currentprofile].title].name}</div>
    <img src="${model.data.titles[model.data.users[model.app.currentprofile].title].picture}">
    `
}

function genglobalui(key) {
    if (key == 'profile') model.app.currentprofiletab = ''
    return /*HTML*/`
    <img id="globallogo" onclick="updateview('homescreen')" src="img/background.jpg"/>
    
    <div id="globalchild">
    ${model.data.superAdmin.users.includes(model.app.userID) ? '<img onclick="togglerainbowroad()" src="img/rainbow.png">' : ''}
    <img src=${model.app.muteurl} onclick="mutebtn()">
    <img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
    </div>
    `
}

function updateview(newview, key) {
    newview ? (model.app.currentView = newview, window[newview](key)) : window[model.app.currentView](key)
    if (model.app.rainbowroad) rainbowroad()
}

function mutebtn() {
    yarr.paused ? (yarr.play(), model.app.muteurl = "img/mute.png") : (yarr.pause(), model.app.muteurl = "img/muted.png");
    updateview()
}

function genprojectlist() {
    return model.data.projects.filter(p => p.approved).map(value => {
        console.log(value.id)
        return /*HTML*/`<div onclick="updateview('projectpage', ${value.id})" id="homeprojectcard">

        <div>
        <img src="${value.picture}"/>
        </div>
        
        <div>
        <div>
        <div>${model.data.users[value.author].username}</div>
        <div>${value.name}</div>
        </div>
        </div>
        
        <div>${value.description}</div>
        
        </div>
        `
    }).join('')
}

function darkmode() {
    const mode = model.app.darkmode ? ['white', 'black', false, "img/sun.png"] : ['rgb(31, 31, 31)', 'black', true, "img/moon.png"];
    app.style.backgroundColor = mode[0];
    model.app.darkmode = mode[2];
    model.app.darkmodeurl = mode[3];
    updateview();
}

function genwordcloud() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'silver', 'aqua']
    return Object.entries(model.data.wordCloud).map(([key, value], i) => {
        return `<div id="wordcloudcard" style="font-size: ${value < 12 ? value * 30 + 100 : 460}%; color: ${colors[i]}">${key}</div>`
    }).join('')
}

function genuserlist() {
    return model.data.users.map((value, key) => {
        return `<div id="usercard" onclick="updateview('profileScreen', ${value.id})">
        <div>
        <div>${value.username}</div>
        <div>${value.friends.length} venner</div>
        <div>${value.projects.length} prosjekter</div>
        </div>
        <img style="height: 6vh; width: auto" src="${value.profilePicture}"/>
        </div>
        `
    }).join('')
}

function admin() {
    let adminButton = '';
    let currentUserId = model.app.userID;
    if (model.data.adminpanel.users.includes(currentUserId) || model.data.superAdmin.users.includes(currentUserId)) {
        adminButton = `<button onclick="updateview('adminpanel')" id="loginbtn">adminpanel</button>`;
    }
    return adminButton;
}

function rainbowroad() {
    document.querySelectorAll(`#homeuserlist, #projects, #wordcloud, #nonadminprojects, #nonadminusers, #friends, #uploads, #chat, #notifications, 
        #insults, #settings, #uploadinputs, #fileContentTextarea, #comments, .rightmsg, .leftmsg, .insultmsg, button`).forEach(tag =>
        tag.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)')
}

function togglerainbowroad() {
    model.app.rainbowroad ? model.app.rainbowroad = false : model.app.rainbowroad = true
    updateview()
}


