homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    <input id="searchbar">
    <button id="loginbtn" onclick="logInscreen()">login</button>
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    <button id="uploadbtn" onclick="uploadPageView()">upload</button>
    <button id="myprofilebtn" onclick="profileScreen()">min profil</button>
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    `
}

function updateview(view) {
    view ? (model.app.currentView = view, window[view]()) : window[model.app.currentView]()
}

function genprojectlist(){
    userlist = ''
    for (let i = 0; i < 8; i++){
        userlist += /*HTML*/`
        <div onclick="uploadPageView()" id="projectcard">
        <img src="https://itamargilad.com/wp-content/uploads/2021/08/1920px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_Rotterdam_-_Google_Art_Project_-_edited-1024x820.jpg"/>
        <div>
        <div>Prosjekt navn</div>
        <div>Prosjekt forfatter</div>
        </div>
        <div>Beskrivelse</div>
        </div>
        `
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
            <div id="wordcloudcard">${key}: ${model.data.wordCloud[key]}</div>
            `;
        
    }
    return wordcloudlist;
}


function genuserlist(){
    userlist = ''
    for (let i = 0; i < 10; i++){
        userlist += /*HTML*/`
        <div id="usercard" onclick="profileScreen()">
        <div>
        <div>Navn</div>
        <div>X prosjekter</div>
        <div>X Venner</div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvr3sdM8-l74Xvki4TOkYBjwiAuFJ_L9Si5eszp_bMg&s"/>
        </div>
        `
    }
    return userlist
}