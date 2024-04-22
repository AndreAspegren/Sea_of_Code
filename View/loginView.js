function logInscreen() {
    app.innerHTML = /*HTML*/`
        <div id="allDiv">
        <div id="logobtn">
        <img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
        </div>

        <div id="buttons">
                <button id="mutebutton" onclick="mutebtn()">Mute</button>
                <button id="darkmode" onclick="darkmode()">Dark mode</button>
            </div>
            
            <div id="loginscreen">
                <h2> Logg inn </h2>
                <input type="text" id="usernameInput" placeholder="Brukernavn" required/>
                <input type="password" id="passwordInput" placeholder="Passord" required/>
                <button onclick="login()">Logg inn</button>
            </div>


            <div id="footer">
                Ikke registrert? Lag bruker her:
                <button id="register" onclick="registerUser()"> Registrer bruker </button>
            </div>
        </div>
    `;
}