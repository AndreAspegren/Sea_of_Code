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
    <input type="text">
    </div>

    <div>
    <li>Project description</li>
    <input type="text">
    </div>

    <div>
    <li>Upload files</li>
    <input type="file">
    </div>

    <div>
    <li>Upload project</li>
    <input type="file">
    </div>

</div>

<img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
<button onclick="darkmode()" id="darkmode">darkmode</button>
<img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `;
}

function userList() {
    let usersList = '';
    for (let user in model.data.users) {
        usersList += /*html*/`
    <td>
    <div class="userInfo">
    ${model.data.users[user].username}
    <img class="userProfilePicture" src="${model.data.users[user].profilePicure}"/>
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