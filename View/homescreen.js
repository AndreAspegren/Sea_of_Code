homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <div id="logo">logo</div>
    <input id="searchbar">
    <button id="loginbtn">login</button>
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <div id="darkmode"><div>darkmode</div></div>
    `
}

function genprojectlist(){
    userlist = ''
    for (let i = 0; i < 8; i++){
        userlist += /*HTML*/`
        <div id="projectcard">prosjekter</div>
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