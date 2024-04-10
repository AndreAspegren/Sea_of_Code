function login(){
    const username = document.getElementById(usernameInput);
    const passord = document.getElementById(passwordInput);
    let user = findUser();
    if (user == null) {
        alert('Finner ikke bruker med brukernavn og/eller passord, prøv igjen');
    } else {
        model.app.currentView = 'homescreen';
        model.app.userID = model.data.user.id;
    }
    updateview();
}

function findUser() {
    for (let user of model.data.users) {
        if (user.id == model.app.userID
        && user.password == model.input.login.password){
            return user.id
        }
        
    }
    return null;
}