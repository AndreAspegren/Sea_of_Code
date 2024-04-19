
function userRegister() {
    const createAccount = model.input.createAccount[0];

    const confirmPassword = document.getElementById('passwordTwo').value;
    const passwordOne = document.getElementById('passwordOne').value;
    if (passwordOne !== confirmPassword) {
        alert("Passordene matcher ikke!");
        return;
    }

    const profilePictureFile = document.getElementById('fileInput').files[0];
    if (profilePictureFile) {
        createAccount.profilePicture = URL.createObjectURL(profilePictureFile);
    }
  
createAccount.id = model.data.users.length;
const newUser = {...createAccount};
model.data.users.push(newUser);
updateview('logInscreen');
}

function fileChange(event) {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        const file = fileInput.files[0];
        if (file) {
            model.input.createAccount[0].profilePicture = URL.createObjectURL(file);
            let image = document.getElementById('profilePicture');
            image.src = model.input.createAccount[0].profilePicture;
        }
    } else {
        console.error("File input element not found.");
    }
}

function inputChange(field, value) {
    model.input.createAccount[0][field] = value;
}