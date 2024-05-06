function logInscreen() {
    app.innerHTML = /*HTML*/`
    
        <div id="allDiv">
        <div id="logobtn">
        </div>

        <div id="buttons">
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
        ${genglobalui()}
    `;
    logineventlistener()
}

function logineventlistener() {
    document.getElementById('loginForm').addEventListener('keydown', event => {
          if (event.key === 'Enter') login()
      })
}
