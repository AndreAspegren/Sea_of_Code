function profileScreen(key) {
  if (key != undefined) model.app.currentprofile = key
  let profile = model.app.currentprofile
  const user = model.data.users[key == undefined ? profile : key]
  let tab = model.app.currentprofiletab
  app.innerHTML = /*HTML*/`
<div id="profileScreen">
  <div class="container">
    <div class="profile-header">
      <div class="profile-img">
      <img src="${user.profilePicture}" width="" alt="">     </div>
      <div class="profile-nav-info">
        <h3 class="user-name">${user.username}</h3>
      </div>
      <div class="user-rank">${userrank()}</div>
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
          <p class="mobile-no"><i class="fa fa-phone">📞</i>${user.phoneNr}</p>
          <p class="user-mail"><i class="fa fa-envelope">📧</i>${user.eMail}</p>
          <p class="country">${user.country}</p>
          <p class="city">${user.city}</p>
          <div class="user-bio">
            <h3>Bio</h3>
            <p class="bio">${user.bio}</p>
          </div>
          <div class="profile-btn">
            ${model.app.loggedIn && model.app.userID != profile ? `<button class="chatbtn" onclick="model.app.currentprofiletab = 'chat'; updateview()">
              <i class="fa fa-comment"></i> 🗨Chat 
            </button>` : ''}
            ${model.app.loggedIn && profile != model.app.userID & !model.data.users[model.app.userID].friends.includes(profile) ? `
            <button class="createbtn" onclick="addfriend(${key})">
              <i class="fa fa-plus"></i> 	➕Legg til venn
              </button>` : ''}
            ${profile === model.app.userID ? `<button class="logoutbtn" onclick="logOff()">
              <i class="fa fa-door"></i> 🔚 Logg ut
              </button>` : ''}
          </div>
          <div class="user-socialmedia">
          <p class="socialmedia">${user.github}, ${user.linkedIn}</p>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="nav">
          <ul>
            <li class="user-friends" onclick="model.app.currentprofiletab = 'friends'; tabs(1); updateview()">Venner</li>
            <li class="user-uploads" onclick="model.app.currentprofiletab = 'uploads'; tabs(2); updateview()">Opplastinger</li>
            ${model.app.loggedIn && profile != model.app.userID ? `<li class="user-chat" onclick="model.app.currentprofiletab = 'chat'; tabs(3); updateview()">Chat</li>` : ''}
            ${model.app.loggedIn && profile == model.app.userID ? `
            <li class="user-setting" onclick="model.app.currentprofiletab = 'settings'; tabs(4); updateview()">Endre profil</li>
            <li class="user-notification" onclick="model.app.currentprofiletab = 'notifications'; tabs(5); updateview()">Notifikasjoner</li>
            <li class="user-api" onclick="model.app.currentprofiltab = 'api'; tabs(6); updateview()">Fornærmelser</li>` : ''}
          </ul>
        </div>
        <div class="profile-body">
          <div class="profile-posts tab active">
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
<div id="${tab ?? ''}">
  ${tab == 'friends' ? genfriendlist(key == undefined ? profile : key) : ''}
  ${tab == 'uploads' ? genuploads(key == undefined ? profile : key) : ''}
  ${tab == 'settings' && profile === model.app.userID ? gensettings(key == undefined ? profile : key) : ''}
  ${tab == 'chat' ? genchat(key == undefined ? profile : key) + /*HTML*/`
  <div id="msgbox">
    <input oninput="model.input.userActivity.message = this.value" id="dminputbox">
    <button onclick="senddm()">Send</button>
  </div>` : ''}
  ${tab == 'notifications' ? gennotifications(key == undefined ? profile : key) : ''}
</div>
${genglobalui()}
`
console.log(tab)
  if (tab == 'chat') dmeventlistener()
}

function dmeventlistener() {
  document.getElementById('dminputbox').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') senddm()
  })
}

function senddm() {
  model.data.messages.push({
    from: model.app.userID,
    to: model.app.currentprofile,
    Datesent: new Date().toISOString().substr(0, 16).replace('T', ' '),
    content: model.input.userActivity.message,
  },)
  model.data.users[model.app.currentprofile].notifications.push({
    id: model.data.users[model.app.currentprofile].notifications.length,
    type: 'dm',
    from: model.app.userID,
    dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
    function: function () { `model.app.currentprofiletab = 'chat'; updateview('profilescreen', ${model.app.userID})` }
  })
  updateview()
}

function gennotifications() {
  return model.data.users[model.app.userID].notifications.map(n => {
    let message = {
      'dm': 'sendte deg en melding!',
      'addedfriend': 'la deg til som venn!',
      'comment': 'kommenterte på prosjektet ditt!',
      'rankup': 'Du gikk opp i rank!',
    }
      return /*HTML*/`
      <div style="width: 60vw; height: 10vh; display: flex;" onclick="redirectnoti(${n.id})"><img src="${model.data.users[n.from].profilePicture}">
                      <div>${n.type == 'rankup' ? '' : model.data.users[n.from].firstName + ' ' + model.data.users[n.from].lastName + ' '}${message[n.type]}</div>
                      <div>Dato: ${n.dateSent}</div></div>`
  })
}

window.redirectnoti = function(notificationId) {
  console.log('hei', notificationId)
  const notification = model.data.users[model.app.userID].notifications.find(n => n.id === notificationId)
  if (notification && typeof notification.function === 'function') {
      notification.function()
  }
}

function genfriendbtn(key, user) {
  if (!model.app.loggedIn) return ''
  if (key != model.app.userID && !model.data.users[model.app.userID].friends.includes(key)) return `<button onclick="addfriend(${user.id}); updateview('profileScreen', ${user.id})">Legg til venn</button>`;
  if (model.data.users[model.app.userID].friends.includes(key)) return '<div>Dere er venner</div>';
}

function genuploads(key) {
  return model.data.projects.filter(m => (m.author == key))
    .map(m => {
      return /*HTML*/`<div onclick="updateview('projectpage', ${key})" id="homeprojectcard">
        <img src="${m.picture}"/>
        <div>
        <div>${model.data.users[m.author].username}</div>
        <div>${m.name}</div>
        </div>
        <div>${m.description}</div>
        </div>
        `;
    })
    .join('')
}

function genchat(key) {
  return model.data.messages
    .filter(m => (m.from == model.app.userID && m.to == key || m.from == key && m.to == model.app.userID))
    .map(m => {
      let currentclass = m.from == model.app.userID ? 'rightmsg' : 'leftmsg'
      return `<div id="${currentclass}">${m.content}</div>`
    })
    .join('')
}

function genfriendlist(key) {
  return model.data.users[key].friends.filter(f => f != key).map(key => {
    return `
    <div id="friendcards" onclick="updateview('profileScreen', ${key})">
    <div>
    <div>${model.data.users[key].username}</div>
    <div>${model.data.users[key].projects.length} prosjekter</div>
    <div>${model.data.users[key].friends.length} venner</div>
    </div>
    <img style="height: 6vh; width: auto" src="${model.data.users[key].profilePicture}"/>
    </div>
    `
  }).join('')
}

function gensettings() {
  return /*HTML*/`<div id="usersetting">
    <h2>Endre profil</h2>
    <input type="text" oninput="model.input.editProfile.username = this.value" placeholder="Brukernavn" required/>
    <input type="text" oninput="model.input.editProfile.eMail = this.value" placeholder="Email" required />
    <input type="password" oninput="model.input.editProfile.passwordOne = this.value" placeholder="Passord" required/>
    <input type="password" oninput="model.input.editProfile.passwordTwo = this.value" placeholder="Bekreft passord" required/>
    <input type="text" oninput="model.input.editProfile.firstName = this.value" placeholder="Navn (frivillig)" />
    <input type="text" oninput="model.input.editProfile.lastName = this.value" placeholder="Etternavn (frivillig)" />
    <input type="text" oninput="model.input.editProfile.phoneNr = this.value" placeholder="Telefonnummer (frivillig)" />
    <input type="text" oninput="model.input.editProfile.age = this.value" placeholder="Alder (frivillig)" />
    <input type="text" oninput="model.input.editProfile.country = this.value" placeholder="Sted (frivillig)" />
    <input type="text" oninput="model.input.editProfile.github = this.value" placeholder="Github link (frivillig)" />
    <input type="text" oninput="model.input.editProfile.linkedIn = this.value" placeholder="LinkedIn (frivillig)" />
    <input type="file" id="fileInput" onchange="fileChange(event)">
    <textarea id="bio" oninput="model.input.editProfile.bio = this.value" placeholder="Bio"></textarea>
    Last opp profilbilde:
    <img id="profilePicture"/>
    <button style="width: 10vh;" onclick="editprofile()">Endre profil</button>    </div>`
}

function addfriend(key) {
  model.data.users[model.app.userID].friends.push(key)
  model.data.users[key].friends.push(model.app.userID)
  model.data.users[key].notifications.push({
    id: model.data.users[key].notifications.length,
    type: 'addedfriend',
    from: model.app.userID,
    dateSent: new Date().toISOString().substr(0, 16).replace('T', ' '),
    function: function () { `model.app.currentprofiletab = null; updateview('projectpage', ${model.app.userID})` }
  })
  updateview()
}

function editprofile() {
  Object.keys(model.input.editProfile).forEach(key => {
    if (model.input.editProfile[key]) model.data.users[model.app.userID][key] = model.input.editProfile[key]
  })
  Object.keys(model.input.editProfile).forEach(key => {
    model.input.editProfile[key] = ''
  })
  updateview()
}

