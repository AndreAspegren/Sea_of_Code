function registerUser(){
    const apps = document.getElementById('app');
    apps.innerHTML = /*HTML*/`
    <h2>Registrer bruker</h2>

    <input type="text" onchange="" placeholder="Email" />
    <input type="text" onchange="" placeholder="Brukernavn" />
    <input type="text" onchange="" placeholder="Passord" />
    <input type="text" onchange="" placeholder="Navn (frivillig)" />
    <input type="text" onchange="" placeholder="Etternavn (frivillig)" />
    <input type="text" onchange="" placeholder="Telefonnummer (frivillig)" />
    <input type="text" onchange="" placeholder="Alder (frivillig)" />
    <input type="text" onchange="" placeholder="Sted (frivillig)" />
    <input type="text" onchange="" placeholder="Github link (frivillig)" />
    <input type="text" onchange="" placeholder="LinkedIn (frivillig)" />
    <textarea id="bio" onchange="" placeholder="Bio"></textarea>
    Last opp profilbilde:
    <input type="file" onchange="loadFile(event)">
    <img id="profilePicture" />

    <button onclick="userRegister()">Registrer bruker</button>
    
    `
;}

let loadFile = function(event) {
    let image = document.getElementById('profilePicture');
    image.src = URL.createObjectURL(event.target.files[0]);
};
