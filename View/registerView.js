registerUser();
function registerUser(){

    app.innerHTML = /*HTML*/`
    <div id="darkmodeDiv" class="darkmodeDiv">
    <button id="darkmode" onclick="darkmode()">Dark mode</button>
    </div>
    <div id="registerDiv" class="registerDiv">
    <h2>Registrer bruker</h2>
    <input type="text" onchange="inputChange('eMail', this.value)" placeholder="Email" required />
    <input type="text" onchange="inputChange('username', this.value)" placeholder="Brukernavn" required/>
    <input type="password" id="passwordOne" onchange="inputChange('passwordOne', this.value)" placeholder="Passord" required/>
    <input type="password" id="passwordTwo" onchange="inputChange('passwordTwo', this.value)" placeholder="Bekreft passord" required/>
    <input type="text" onchange="inputChange('firstName', this.value)" placeholder="Navn (frivillig)" />
    <input type="text" onchange="inputChange('lastName', this.value)" placeholder="Etternavn (frivillig)" />
    <input type="text" onchange="inputChange('phoneNr', this.value)" placeholder="Telefonnummer (frivillig)" />
    <input type="text" onchange="inputChange('age', this.value)" placeholder="Alder (frivillig)" />
    <input type="text" onchange="inputChange('country', this.value)" placeholder="Sted (frivillig)" />
    <input type="text" onchange="inputChange('github', this.value)" placeholder="Github link (frivillig)" />
    <input type="text" onchange="inputChange('linkedIn', this.value)" placeholder="LinkedIn (frivillig)" />
    <textarea id="bio" onchange="inputChange('bio', this.value)" placeholder="Bio"></textarea>
    Last opp profilbilde:
    <input type="file" id="fileInput" onchange="fileChange(event)">
    <img id="profilePicture"/>

    <button onclick="userRegister()">Registrer bruker</button>
    </div>
    `
;}

let loadFile = function(event) {
    let image = document.getElementById('profilePicture');
    image.src = URL.createObjectURL(event.target.files[0]);
};