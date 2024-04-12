function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    const user = findUser(username, password);
    if (user === null) {
        alert('Finner ikke brukernavn og/eller passord, prøv igjen.');
    } else {
        model.app.loggedIn = true;
        model.app.userID = user.id;
        updateview('homescreen');
    }
}

function findUser(username, password) {
    for (let user of model.data.users) {
        if (user.username === username && user.passwordOne === password) {
            return user;
        }
    }

    return null;
}