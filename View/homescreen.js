updateview('homescreen')
function homescreen() {
    app.innerHTML = /*HTML*/`
    ${genglobalui()}
    <div id="homecontainer">
    
    <div id="homesearchbar">
    <span>
    <input type="text" placeholder="Søk..." id="searchbar" onchange="searchbar()"/>
    <button onclick="searchbar()">Søk</button>
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
}

function userrank() {
    return `
    <div>${model.data.titles[model.data.users[model.app.currentprofile].title].name}</div>
    <img src="${model.data.titles[model.data.users[model.app.currentprofile].title].picture}">
    `
}

document.getElementById('searchbar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') searchbar()
})

function genglobalui(key) {
    if (key == 'profile') model.app.currentprofiletab = ''
    return /*HTML*/`
   
    <img id="globallogo" onclick="updateview('homescreen')" src="img/background.jpg"/>
    
    <div id="globalchild">
    <img src=${model.app.muteurl} onclick="mutebtn()">
    <img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
    </div>

    `
}

function updateview(newview, key) {
    newview ? (model.app.currentView = newview, window[newview](key)) : window[model.app.currentView](key)
}

function mutebtn() {
    yarr.paused ? (yarr.play(), model.app.muteurl = "img/mute.png") : (yarr.pause(), model.app.muteurl = "img/muted.png");
    updateview()
}

function genprojectlist() {
    return model.data.projects.filter(p => p.approved).map((value, key) => {
        
        return `<div onclick="updateview('projectpage', ${value.id})" id="homeprojectcard">
        
        <img style="" src="${value.picture}"/>
        
        <div>
        <div>${model.data.users[value.author].username}</div>
        <div>${value.name}</div>
        </div>
        
        <div>${value.description}</div>
        
        </div>
        `
    }).join('')
}

function darkmode() {
    const mode = model.app.darkmode ? ['white', 'black', false, "img/sun.png"] : ['rgb(31, 31, 31)', 'white', true, "img/moon.png"];
    app.style.backgroundColor = mode[0];
    app.style.color = mode[1];
    model.app.darkmode = mode[2];
    model.app.darkmodeurl = mode[3];
    updateview();
}

function genwordcloud() {
    return Object.entries(model.data.wordCloud).map(([key, value]) => {
        return `<div id="wordcloudcard" style="font-size: ${value < 12 ? value * 30 + 100 : 460}%">${key}</div>`
    }).join('')
}

function genuserlist() {
    return model.data.users.map((value, key) => {
        return `<div id="usercard" onclick="updateview('profileScreen', ${key})">
        <div>
        <div>${value.username}</div>
        <div>${value.projects.length} prosjekter</div>
        <div>${value.friends.length} venner</div>
        </div>
        <img style="height: 6vh; width: auto" src="${value.profilePicture}"/>
        </div>
        `
    }).join('')
}

function admin() {
    let adminButton = '';
    let currentUserId = model.app.userID;
    if (model.data.adminpanel.users.includes(currentUserId)) {
        adminButton = `<button onclick="updateview('adminpanel')" id="loginbtn">adminpanel</button>`;
    }
    return adminButton;
}