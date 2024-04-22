function registerUser() {

    app.innerHTML = /*HTML*/`
    <div id="registerDiv" class="registerDiv">
    <div id= "registerlogo">
    <img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
    </div>
    <div id="registerbuttons">
    <img src="img/mute.png" onclick="mutebtn()">
    <img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
    </div>
    <div id="registerinputs">
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
    <input type="text" onchange="inputChange('city', this.value)" placeholder="By (frivillig)" />
    <input type="text" onchange="inputChange('github', this.value)" placeholder="Github link (frivillig)" />
    <input type="text" onchange="inputChange('linkedIn', this.value)" placeholder="LinkedIn (frivillig)" />
    <textarea id="bio" onchange="inputChange('bio', this.value)" placeholder="Bio"></textarea>
    <p>
    Last opp profilbilde:
    <input type="file" id="fileInput" onchange="fileChange(event)">
    <img id="registerProfilePicture"/>
    <p>
    <button style="width: 10vh;" onclick="userRegister()">Registrer bruker</button>
    </div>
    </div>
    
    `
        ;
}

let loadFile = function (event) {
    let image = document.getElementById('registerProfilePicture');
    image.src = URL.createObjectURL(event.target.files[0]);
};