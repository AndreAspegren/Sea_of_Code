function profileScreen(key){
    const user = model.data.users[key != undefined ? key : model.app.userID]
    model.app.currentprofile = user.id
    app.innerHTML = /*HTML*/`
    <div id="profileScreen">
    <div class="container">
        <div class="profile-header">
            <div class="profile-img">
                <img src="url" width=""
                alt="">
            </div>
            <div class="profile-nav-info">
                <h3 class="user-name">${user.username}</h3>
            </div>
            <div class="profile-option">
                <div class="notification">
                    <i class="fa fa-bell">🔔</i>
                    <span class="alert-message">1</span>
                </div>
            </div>
        </div>
        <div class="main-bd">
            <div class="left-side">
                <div class="profile-side">
                    <p class="mobile-no"><i class="fa fa-phone">📞</i></p>
                    <p class="user-mail"><i class="fa fa-envelope">📧</i></p>
                    <div class="user-bio">
                        <h3>Bio</h3>
                        <p class="bio">No bio</p>
                    </div>
                    <div class="profile-btn">
                        <button class="chatbtn">
                        <i class="fa fa-comment"></i> 🗨Chat 
                        </button>
                        <button class="createbtn">
                        <i class="fa fa-plus"></i> 	➕Create
                        </button>
                    </div>
                    <div class="user-socialmedia">
                        <p class="socialmedia"></p>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="nav">
                    <ul>
                        <li onclick="model.app.currentprofiletab = 'friends'; tabs(0);" class="user-post active">Friends</li>
                        <li onclick="model.app.currentprofiletab = 'uploads'; tabs(1);" class="user-uploads">Uploads</li>
                        <li onclick="model.app.currentprofiletab = 'settings'; tabs(2);" class="user-setting">Settings</li>
                    </ul>
                </div>
                <div class="profile-body">
                    <div class="profile-posts tab">
                        <h1>Your posts</h1>
                        <p>No posts</p>
                    </div>
                    <div class="profile-uploads tab">
                        <h1>Your uploads</h1>
                        <p>No uploads</p>
                    </div>
                    <div class="profile-settings tab">
                        <h1>Account setting</h1>
                        <p>No settings</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="model.app.currentprofiletab = null; updateview('homescreen')" src="img/logo.jpg"/>
    <div>${!model.app.loggedIn ? '' : genfriendbtn(key, user)}</div>
    ${model.app.currentprofiletab = 'friends' ? genfriendlist(key) ?? '' : ''}
    ${model.app.currentprofiletab = 'uploads' ? genuploads(key) ?? '' : ''}
    ${model.app.currentprofiletab = 'settings' ? settings(key) ?? '' : ''}
`
}

function genfriendbtn(key, user){
    if (key != model.app.userID && !model.data.users[model.app.userID].friends.includes(key)) return `<button onclick="addfriend(${user.id})">Legg til venn</button>`
    if (model.data.users[model.app.userID].friends.includes(key)) return '<div>Dere er venner</div>'
    return ''
}

function genfriendlist(key){

}

function addfriend(key){
    model.data.users[model.app.userID].friends.push(key)
    updateview('profileScreen', key)
}

function getLoggedInUser() {
    const loggedInUserID = model.app.userID;
    console.log('Logged-in User ID:', loggedInUserID);
    const user = model.data.users.find(user => user.id === loggedInUserID);
    console.log('Logged-in User:', user);
    return user;
}