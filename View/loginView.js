function logInscreen(){
    app.innerHTML = /*HTML*/`
    <button id="darkmode" onclick="darkmode()">Dark mode</button>
    <div id="loginscreen">
    <h2> Logg inn </h2>
    <input type="text" id="usernameInput"  placeholder="Brukernavn" required/>
    <input type="password" id="passwordInput"  placeholder="passord"  required/>
    <button onclick="login()">Logg inn</button>
    
    Ikke registrert? Lag bruker her:
    <button id="register" onclick="registerUser()"> Registrer bruker </button>
    </div>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
    `
;}