function logInscreen(){
    const apps = document.getElementById('app');
    apps.innerHTML = /*HTML*/`
    <button id="darkmode" onclick="darkmode">Dark mode</button>
    <h2> Logg inn </h2>
    <input type="text" placeholder="Brukernavn" />
    <input type="text" placeholder="passord" />
    <button onclick="logIn()">Logg inn</button>
    
    Ikke registrert? Lag bruker her:
    <button id="register" onclick="register"> Registrer bruker </button>
    `
;}