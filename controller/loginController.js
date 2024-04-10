function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    const user = findUser(username, password);
    if (user === null) {
        alert('Invalid username or password. Please try again.');
    } else {
        model.app.loggedIn = true;
        model.app.currentView = 'homescreen';
        model.app.userID = user.username;
        updateview('homescreen');
    }
}

function findUser(username, password) {
    for (let user of model.data.users) {
        if (user.username === username && user.password === password) {
            return user;
        }
    }

    return null;
}