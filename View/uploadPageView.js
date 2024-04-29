function uploadPageView() {
    app.innerHTML =/*html*/`
<div id="uploadcontainer">



<div id="uploadinputs">
<div id="uploadinputz">

<h1 class="upload">Last opp ditt prosjekt</h1>
    <input type="text" onchange="model.input.projects.name = this.value" placeholder="Project name" id="projectName">
    <input type="text" onchange="model.input.projects.description = this.value" style="width: 30vh; height: 15vh;" placeholder="Project description" id="projectDescription">
    <input onchange="model.input.projects.picture = this.value" type="url" placeholder="url">
    <select onchange="model.input.projects.language = this.value">
    ${Object.keys(model.data.wordCloud).map(key => {
        return `<option value="${key}">${key}</option>`;
    }).join('')}
</select>

    
    <div>
    <li>Upload files</li>
    <input  type="file" id="fileUpload">
    </div>

    <div>
    <button onclick="sendProjectInfo()">Upload project</button>
    </div>

    </div>

</div>

</div>
${genglobalui()}
    `;
}

function userList() {
    let usersList = '';
    for (let user in model.data.users) {
        usersList += /*html*/`
    <td>
    <div class="userInfo">
    ${model.data.users[user].username}
    <img class="userProfilePicture" src="${model.data.users[user].profilePicture}"/>
    <br>
    ${model.data.users[user].projects.length} prosjekter
    <br>
    ${model.data.users[user].friends.length} venner
    </div>
    </td>
    `;
    }
    return usersList;
}
