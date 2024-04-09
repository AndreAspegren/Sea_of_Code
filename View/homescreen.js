homescreen()
function homescreen(){
    app.innerHTML = /*HTML*/`
    <div id="userlist"><div>${genuserlist()}</div></div>
    <img id="logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1af7f6b3-4ef8-461f-a732-af3d73f70c8e/dgp01pk-7f41f8c1-89d7-4fac-b066-406f1eaed9e2.jpg/v1/fill/w_1920,h_1098,q_75,strp/the_open_sea_by_thecosmicdreamer_dgp01pk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhZjdmNmIzLTRlZjgtNDYxZi1hNzMyLWFmM2Q3M2Y3MGM4ZVwvZGdwMDFway03ZjQxZjhjMS04OWQ3LTRmYWMtYjA2Ni00MDZmMWVhZWQ5ZTIuanBnIiwiaGVpZ2h0IjoiPD0xMDk4Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMWFmN2Y2YjMtNGVmOC00NjFmLWE3MzItYWYzZDczZjcwYzhlXC90aGVjb3NtaWNkcmVhbWVyLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.L9mSOCMMc74YL1kKx_KdB2xu0ZgehVrq62NTeRCSWSI"/>
    <input id="searchbar">
    <button id="loginbtn" onclick="logInscreen()">login</button>
    <div id="wordcloud"><div>${genwordcloud()}</div></div>
    <div id="projectlist"><div id="projectcardposition">${genprojectlist()}</div></div>
    <button onclick="darkmode()" id="darkmode"><div>darkmode</div></button>
    `
}

function genprojectlist(){
    userlist = ''
    for (let i = 0; i < 8; i++){
        userlist += /*HTML*/`
        <div onclick="profileScreen()" id="projectcard">
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