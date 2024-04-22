function uploadPageView() {
    app.innerHTML =/*html*/`
<div id="uploadcontainer">

<div id="uploadbuttons">
<img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
<button onclick="darkmode()" id="darkmode">darkmode</button>
<button id="mutebtn" onclick="mutebtn()">Mute</button>
</div>

<div>
<h1 class="upload">Upload ditt prosjekt</h1>
    <input type="text" onchange="model.input.projects.name = this.value" placeholder="Project name" id="projectName">
    <input type="text" onchange="model.input.projects.description = this.value" style="width: 30vh; height: 15vh;" placeholder="Project description" id="projectDescription">
    <input onchange="model.input.projects.picture = this.value" type="url" placeholder="url">
    

    <div>
    <li>Upload files</li>
    <input  type="file">
    </div>

    <div>
    <button onclick="sendProjectInfo()">Upload project</button>
    </div>

</div>



</div>
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
