function logInscreen() {
    app.innerHTML = /*HTML*/`
        <div id=mainDiv>
<div id="buttons">
<img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
<button id="mutebtn" onclick="mutebtn()">Mute</button>
<button id="darkmode" onclick="darkmode()">Dark mode</button>
</div>

    <div id="loginscreen">
    <h2> Logg inn </h2>
    <input type="text" id="usernameInput"  placeholder="Brukernavn" required/>
    <input type="password" id="passwordInput"  placeholder="passord"  required/>
    <button onclick="login()">Logg inn</button>
    </div>

    <div id="footer">
    Ikke registrert? Lag bruker her:
    <button id="register" onclick="registerUser()"> Registrer bruker </button>
    </div>
        </div>
    `
        ;
}