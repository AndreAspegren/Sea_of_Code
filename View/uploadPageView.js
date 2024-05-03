function uploadPageView() {
    app.innerHTML =/*html*/`

<div id="uploadcontainer">
<div id="uploadinputs">
<div></div>

<div>
<h1>Last opp ditt prosjekt</h1>
    <input type="text" onchange="model.input.projects.name = this.value" placeholder="Prosjektnavn" id="projectName">
    <input type="text" onchange="model.input.projects.description = this.value" style="height: 15vh;" placeholder="Beskrivelse" id="projectDescription">
    <input onchange="model.input.projects.picture = this.value" type="url" placeholder="url">
    <select onchange="model.input.projects.language = this.value">
    ${Object.keys(model.data.wordCloud).map(key => {
        return `<option value="${key}">${key}</option>`;
    }).join('')}
</select>

    
    <div>
    <li>Upload files</li>
    <input  type="file" id="fileUpload" multiple>
    </div>


    <button onclick="pushProject()">Upload project</button>

    </div>

    <div></div>
    </div>
</div>

${genglobalui()}
    `;
}

function userList() {
    return model.data.users.map(u => {
        return `
        <td>
        <div class="userInfo">
        ${u.username}
        <img class="userProfilePicture" src="${u.profilePicture}"/>
        <br>
        ${u.projects.length} prosjekter
        <br>
        ${u.friends.length} venner
        </div>
        </td>
        `
    })
}


