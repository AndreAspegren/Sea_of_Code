let userDetails = '';
let userDetailsContent = '';


function uploadPageView() {
    let usersList = /*html*/`
    <table>
    <tr>
    <th>Users</th>
   ${userDetails}
    </tr>
    </table>
    `;

     for (let i = 0; i < userDetails.length; i++) {
         userDetails += `<td>${userDetailsContent}</td>`;
     }

    app.innerHTML =/*html*/`
${usersList}
<button class="darkMode">Dark mode</button>

<div class="users">

</div>

<h1>Upload your project</h1>

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