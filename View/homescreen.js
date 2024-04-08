homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <div id="logo">logo</div>
    <input id="searchbar">
    <button id="loginbtn" onclick="logInscreen()">login</button>
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <div id="darkmode"><div>darkmode</div></div>
    `
}

function genprojectlist(){
    userlist = ''
    for (let i = 0; i < 8; i++){
        userlist += /*HTML*/`
        <div id="projectcard">
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

function genwordcloud(){
    languages = ['C#', 'C', 'Javascript', 'Typscript', 'Assembly', 'Python', 'CSS', 'HTML']
    wordcloudlist = ''
    for (let i = 0; i < languages.length; i++){
        wordcloudlist += /*HTML*/`
        <div id="wordcloudcard">${languages[i]}</div>
        `
    }
    return wordcloudlist
}

function genuserlist(){
    userlist = ''
    for (let i = 0; i < 12; i++){
        userlist += /*HTML*/`
        <div id="usercard">
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