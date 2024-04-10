function profileScreen(){
    app.innerHTML = /*HTML*/`
    <div id="profileScreen">
    <div class="container">
        <div class="profile-header">
            <div class="profile-img">
                <img src="url" width=""
                alt="">
            </div>
            <div class="profile-nav-info">
                <h3 class="user-name">${}</h3>
            </div>
            <div class="profile-option">
                <div class="notification">
                    <i class="fa fa bell"></i>
                    <span class="alert-message"></span>
                </div>
            </div>
        </div>
        <div class="main-bd">
            <div class="left-side">
                <div class="profile-side">
                    <p class="mobile-no"><i class="fa fa-phone"></i></p>
                    <p class="user-mail"><i class="fa fa-envelope"></i></p>
                    <div class="user-bio">
                        <p class="bio"></p>
                    </div>
                    <div class="user-socialmedia">
                        <p class="socialmedia"></p>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="nav">
                    <ul>
                        <li onclick="tabs(0)" class="user-post active"></li>
                        <li onclick="tabs(1)" class="user-uploads"></li>
                        <li onclick="tabs(2)" class="user-setting"></li>
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
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
`
}

function profilePage(){
    app.innerHTML = /*HTML*/`
        const loggedInUser = getLoggedInUser();

        <h2>Profile Page</h2>
            <div>
                <p>Username: ${loggedInUser.username}</p>
                <p>Email: ${loggedInUser.eMail}</p>
                <p>First Name: ${loggedInUser.firstName}</p>
                <p>Last Name: ${loggedInUser.lastName}</p>
                <!-- Add more fields as needed -->
            </div>
            <button onclick="logout()">Log out</button>
        `;
}