function uploadPageView() {
    app.innerHTML =/*html*/`

<div class="userList">
<table>
<tr>
<th>Users</th>
${userList()}
</tr>
</table>
</div>

<h1 class="upload">Upload your project</h1>

<div class="projectUpload">

    <div>
    <li>Project name</li>
    <input type="text" onchange="model.input.projects.name = this.value" placeholder="Project name" id="projectName">
    </div>

    <div>
    <li>Project description</li>
    <input type="text" onchange="model.input.projects.description = this.value" style="width: 30vh; height: 15vh;" placeholder="Project description" id="projectDescription">
    </div>

    <div>
    <li>Upload Project picture</li>
    <input onchange="model.input.projects.picture = this.value" type="url" placeholder="url">
    </div>

    <div>
    <li>Upload files</li>
    <input  type="file">
    </div>

    <div>
    <button onclick="sendProjectInfo()">Upload project</button>
    </div>

</div>

<img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
<button onclick="darkmode()" id="darkmode">darkmode</button>
<button id="mutebtn" onclick="mutebtn()">Mute</button>
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
