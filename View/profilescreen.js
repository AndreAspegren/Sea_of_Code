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
        ${model.app.loggedIn && profile == model.app.userID ? `<div onclick="model.app.currentprofiletab = 'notifications'; updateview()" class="profile-option"><div class="notification">
          <i class="fa fa-bell">🔔</i>
          <span class="alert-message">${model.data.users[model.app.userID].notifications.length}</span>
        </div></div>` : ''}
    </div>


    <div class="main-bd">
      <div class="left-side">
        <div class="profile-side">
          <p class="mobile-no"><i class="fa fa-phone">📞</i>${user.phoneNr}</p>
          <p class="user-mail"><i class="fa fa-envelope">📧</i>${user.eMail}</p>
          <p class="country">Navn: ${user.firstName + ' ' + user.lastName}</p>
          <p class="country">Alder: ${user.age}</p>
          <p class="country">Land: ${user.country}</p>
          <p class="city">By: ${user.city}</p>
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
            ${profile === model.app.userID ? `<button class="logoutbtn" onclick="logOff(); model.app.currentprofiletab = ''">
              <i class="fa fa-door"></i> 🔚 Logg ut
              </button>` : ''}
          </div>
          <div class="user-socialmedia">
          <p class="socialmedia"><a href="${user.github}" target="blank">Besøk Github</a></p>
          <p class="socialmedia"><a href="${user.linkedIn}" target="blank">Besøk LinkedIn</a></p>
          </div>
        </div>
      </div>


      <div class="right-side">
        <div class="nav">
          <ul>
            <li class="btn" onclick="model.app.currentprofiletab = 'friends';  updateview()">Venner</li>
            <li class="btn" onclick="model.app.currentprofiletab = 'uploads';  updateview()">Opplastinger</li>
            ${model.app.loggedIn && profile != model.app.userID ? `<li class="user-chat" onclick="model.app.currentprofiletab = 'chat';  updateview()">Chat</li>` : ''}
            ${model.app.loggedIn && profile == model.app.userID ? /*HTML*/`
            <li class="btn" onclick="model.app.currentprofiletab = 'notifications'; updateview()">Notifikasjoner</li>
            <li class="btn" onclick="model.app.currentprofiletab = 'insults';  updateview()">Fornærmelser</li>
            <li class="btn" onclick="model.app.currentprofiletab = 'settings'; updateview()">Endre profil</li>` : ''}
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</div>

<div id="${tab ?? ''}">
  ${tab == 'friends' ? genfriendlist(key == undefined ? profile : key) : ''}
  ${tab == 'uploads' ? genuploads(key == undefined ? profile : key) : ''}
  ${tab == 'chat' ? genchat(key == undefined ? profile : key) : ''}
  ${tab == 'notifications' ? gennotifications(key == undefined ? profile : key) : ''}
  ${tab == 'insults' ? geninsults() : ''}
  ${tab == 'settings' && profile === model.app.userID ? gensettings(key == undefined ? profile : key) : ''}
</div>
</div>
<img id="globallogo" onclick="updateview('homescreen'); model.app.currentprofiletab = '';" src="img/background.jpg"/>
<div id="globalchild">
<img src=${model.app.muteurl} onclick="mutebtn()">
<img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
`
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
    para: `profileScreen, ${model.app.userID}`,
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
    const params = n.para.split(',').map(param => param.trim())
    return /*HTML*/`
      <div id="notichild" 
      onclick="model.data.users[model.app.userID].notifications.splice(${n.id}, 1); updateview('${params[0]}', ${Number(params[1])})"><img id="notigrandchild" src="${model.data.users[n.from].profilePicture}">
                      <div id="notigrandchild">${n.type == 'rankup' ? '' : model.data.users[n.from].username + ' '}${message[n.type]}</div>
                      <div id="notigrandchild">Dato: ${n.dateSent}</div></div>`
  })
}


function geninsults() {
  return model.data.insults.map(i => {
    return `<div id="leftmsg">${i}</div>`
  })
    .join('') + /*HTML*/`<button style="width: 10vw; height: 3vh" id="msgbox" onclick="fetchinsult(); updateview()">Bli fornærmet</button>`
}

async function fetchinsult() {
  const proxy = 'https://api.allorigins.win/raw?url='
  const link = 'https://pirate.monkeyness.com/api/insult'
  const apiUrl = `${proxy}${link}?nocache=${new Date().getTime()}`

  try {
    const response = await fetch(apiUrl)
    const responseData = await response.text()
    model.data.insults.push(responseData.trim())
    console.log('Insult fetched and added:', responseData.trim())
  } catch (error) {
    console.error('Error fetching insult:', error)
    throw error
  }
  updateview()
}

function genfriendbtn(key, user) {
  if (!model.app.loggedIn) return ''
  if (key != model.app.userID && !model.data.users[model.app.userID].friends.includes(key)) return `<button onclick="addfriend(${user.id}); updateview('profileScreen', ${user.id})">Legg til venn</button>`;
  if (model.data.users[model.app.userID].friends.includes(key)) return '<div>Dere er venner</div>';
}

function genuploads(key) {
  return model.data.projects.filter(m => (m.author == key))
    .map(m => {
      return /*HTML*/`<div onclick="updateview('projectpage', ${key})" id="profileprojectcard">
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
    .join('') + `<div id="msgbox">
    <input oninput="model.input.userActivity.message = this.value" id="dminputbox">
    <button onclick="senddm()">Send</button>
  </div>`
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
    <input type="text" oninput="model.input.editProfile.firstName = this.value" placeholder="Førstenavn (frivillig)" />
    <input type="text" oninput="model.input.editProfile.lastName = this.value" placeholder="Etternavn (frivillig)" />
    <input type="text" oninput="model.input.editProfile.phoneNr = this.value" placeholder="Telefonnummer (frivillig)" />
    <input type="text" oninput="model.input.editProfile.age = this.value" placeholder="Alder (frivillig)" />
    <input type="text" oninput="model.input.editProfile.country = this.value" placeholder="Land (frivillig)" />
    <input type="text" oninput="model.input.editProfile.city = this.value" placeholder="By (frivillig)" />
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
    para: `profileScreen, ${model.app.userID}`,
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

