function profileScreen(){
    app.innerHTML = /*HTML*/`
    <div class="container">
        <div class="profile-header">
            <div class="profile-img">
                <img src="url" width=""
                alt="">
            </div>
            <div class="profile-nav-info">
                <h3 class="user-name"></h3>
            </div>
            <div class="profile-option">
                <div class="notification">
                    <i class="fa fa bell"></i>
                    <span class="alert-message">1</span>
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
                        <li onclick="" class="user-post active"></li>
                        <li 
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <button onclick="darkmode()" id="darkmode">darkmode</button>
    <img id="logo" onclick="updateview('homescreen')" src="img/logo.jpg"/>
`
}