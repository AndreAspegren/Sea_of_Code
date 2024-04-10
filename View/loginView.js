function logInscreen(){
    app.innerHTML = /*HTML*/`
    <button id="darkmode" onclick="darkmode()">Dark mode</button>
    <div id="loginscreen">
    <h2> Logg inn </h2>
    <input type="text" onchange="usernameLogIn()" placeholder="Brukernavn" required/>
    <input type="text" onchange="passwordLogIn()" placeholder="passord"  required/>
    <button onclick="logIn()">Logg inn</button>
    
    Ikke registrert? Lag bruker her:
    <button id="register" onclick="registerUser()"> Registrer bruker </button>
    </div>
    `
;}