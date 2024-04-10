profileScreen ()
function profileScreen(){
    app.innerHTML = /*HTML*/`
    <div class="container">
        <div class="profile-header">
            <div class="profile-img">
                <img src="placeHolder" width="placeHolder"
                alt="">
            </div>
            <div class="profile-nav-info">
                <h3 class="user-name">Rune Smedhaugen</h3>
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
                    <p class="mobile-no"><i class="fa fa-phone"></i>+4747610118</p>
                    <p class="user-mail"><i class="fa fa-envelope"></i>rune.smed@gmail.com</p>
                    <div class="user-bio">
                        <p class="bio">placeHolder</p>
                    </div>
                    <div class="user-socialmedia">
                        <p class="socialmedia">placeHolder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
}