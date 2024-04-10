
function userRegister() {
    const createAccount = model.input.createAccount[0];

    const {
        eMail,
        username,
        passwordOne,
        passwordTwo, 
        firstName,
        lastName,
        phoneNr,
        age,
        country,
        github,
        linkedIn,
        bio,
        profilePicure
    } = createAccount;

    const confirmPassword = document.getElementById('passwordTwo').value;
    if (passwordOne !== passwordTwo) {
        alert("Passordene matcher ikke!");
        return;
    }

    const profilePictureFile = document.getElementById('fileInput').files[0];
    if (profilePictureFile) {
        createAccount.profilePicure = URL.createObjectURL(profilePictureFile);
    }
  
    const newUser = { ...model.input.createAccount[0] };
    newUser.id = model.data.users.length + 1;
    model.data.users.push(newUser);

}

function fileChange(event) {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        const file = fileInput.files[0];
        if (file) {
            model.input.createAccount[0].profilePicure = URL.createObjectURL(file);
            let image = document.getElementById('profilePicture');
            image.src = model.input.createAccount[0].profilePicure;
        }
    } else {
        console.error("File input element not found.");
    }
}

function inputChange(field, value) {
    model.input.createAccount[0][field] = value;
}