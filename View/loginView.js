function logInscreen() {
    app.innerHTML = /*HTML*/`
        <div id="allDiv">
        <div id="logobtn">
        <img id="logo" onclick="updateview('homescreen')" src="https://cdn.pixabay.com/photo/2023/11/12/16/48/pirate-8383445_1280.jpg"/>
        </div>

        <div id="buttons">
        <img src="img/mute.png" onclick="mutebtn()">
                <img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
            </div>
            
            <div id="loginscreen">
                <h2> Logg inn </h2>
                <form id="loginForm">
                    <input type="text" id="usernameInput" placeholder="Brukernavn" required/>
                    <input type="password" id="passwordInput" placeholder="Passord" required/>
                </form>
                <button type="submit" onclick="login()">Logg inn</button>
            </div>


            <div id="footer">
                Ikke registrert? Lag bruker her:
                <button id="register" onclick="registerUser()"> Registrer bruker </button>
            </div>
        </div>
    `;
}
