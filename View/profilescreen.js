async function profileScreen(key) {
  if (key != undefined) model.app.currentprofile = key
  let profile = model.app.currentprofile
  const user = model.data.users[key == undefined ? profile : key]
  let tab = model.app.currentprofiletab

  app.innerHTML = /*HTML*/`
  <div id="profilegrandparent">

    <div id="pheader">
    </div>
    
    <div id ="pnameandtitle">
    <div>
    <div>${user.username}
    <div>${model.data.superAdmin.users.includes(profile) ? 'Super admin' : model.data.adminpanel.users.includes(profile) ? 'Admin' : ''}</div>
    </div>
    </div>
    <div>
    <div>${model.data.titles[model.data.users[model.app.currentprofile].title].name}</div>
    <img src="${model.data.titles[model.data.users[model.app.currentprofile].title].picture}">
    </div>
    ${model.app.loggedIn && profile == model.app.userID ? `
    <div id="notificationIcon" onclick="model.app.currentprofiletab = 'notifications'; updateview()">
    <i class="bell">🔔</i>
    <span class="count">${model.data.users[model.app.userID].notifications.length}</span>
    </div>` : ''}
    </div>
    
    <div id="pinfo">
    <div><img src="${user.profilePicture}" width="" alt=""></div>     
    <p >Navn: ${user.firstName + ' ' + user.lastName}</p>
      <p ><i class="fa fa-phone">📞</i>${user.phoneNr}</p>
      <p ><i class="fa fa-envelope">📧</i>${user.eMail}</p>
      <p >Alder: ${user.age}</p>
      <p >Land: ${user.country}</p>
      <p >By: ${user.city}</p>
      <p class="bio">Bio: ${user.bio}</p>
      <p><a href="${user.github}" target="blank">Besøk Github</a></p>
      <p><a href="${user.linkedIn}" target="blank">Besøk LinkedIn</a></p>
      ${model.app.loggedIn && model.app.userID != profile ? `<button  onclick="model.app.currentprofiletab = 'chat'; updateview()">
      <i ></i> 🗨Chat 
      </button>` : ''}
      ${model.app.loggedIn && profile != model.app.userID & !model.data.users[model.app.userID].friends.includes(profile) ? `
      <button onclick="addfriend(${key})">
      <i></i> 	➕Legg til venn
      </button>` : ''}
      ${profile === model.app.userID ? `<button onclick="logOff(); model.app.currentprofiletab = ''">
      <i></i> 🔚 Logg ut
      </button>` : ''}
    </div>

    <div id="pcontent">
      <div id="pbuttons">
        <button class="btn" onclick="model.app.currentprofiletab = 'friends';  updateview()">Venner</button>
        <button class="btn" onclick="model.app.currentprofiletab = 'uploads';  updateview()">Opplastinger</button>
        ${model.app.loggedIn && profile != model.app.userID ? `<button class="user-chat" onclick="model.app.currentprofiletab = 'chat';  updateview()">Chat</button>` : ''}
        ${model.app.loggedIn && profile == model.app.userID ? /*HTML*/`
        <button class="btn" onclick="model.app.currentprofiletab = 'notifications'; updateview()">Notifikasjoner</button>
        <button class="btn" onclick="model.app.currentprofiletab = 'insults'; updateview()">Fornærmelser</button>
        <button class="btn" onclick="model.app.currentprofiletab = 'settings'; updateview()">Endre profil</button>` : ''}
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

  </div>
      
<img id="globallogo" onclick="updateview('homescreen'); model.app.currentprofiletab = '';" src="img/background.jpg"/>

<div id="globalchild">
${model.data.superAdmin.users.includes(model.app.userID) ? '<img onclick="togglerainbowroad()" src="img/rainbow.png">' : ''}
<img src=${model.app.muteurl} onclick="mutebtn()">
<img onclick="darkmode()" src=${model.app.darkmodeurl} id="darkmode">
</div>
`
  if (tab == 'chat') dmeventlistener()
  if(model.app.rainbowroad) rainbowroad()
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
      onclick="model.data.users[model.app.userID].notifications.splice(${n.id}, 1); updateview('${params[0]}', ${Number(params[1])})">
      
      <div>
      <img id="notigrandchild" src="${model.data.users[n.from].profilePicture}">
      </div>

      <div id="notigrandchild">${n.type == 'rankup' ? '' : model.data.users[n.from].username + ' '}${message[n.type]}</div>
                      
      <div id="notigrandchild">Dato: ${n.dateSent}</div>
      
      </div>
      `
  })
}

function geninsults() {
  return '<div>' + model.data.insults.map(insult => {
    return `<div class="insultmsg">${insult}</div>`
  })
    .join('') + /*HTML*/`</div>
    <div>
    <button id="insultbtn" onclick="fetchinsult(); updateview()">Bli fornærmet</button>
    </div>`
}

async function fetchinsult() {
  const proxy = 'https://api.allorigins.win/raw?url='
  const link = 'https://pirate.monkeyness.com/api/insult'
  const apiUrl = `${proxy}${link}?nocache=${new Date().getTime()}`

  try {
    const response = await fetch(apiUrl)
    const responseData = await response.text()
    model.data.insults.push(responseData)
    console.log('Insult fetched and added:', responseData.trim())
  } catch (error) {
    console.error('Error fetching insult:', error)
    throw error
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
      return /*HTML*/`
      <div onclick="updateview('projectpage', ${m.id})" id="profileprojectcard">
        
        <div>
        <img src="${m.picture}"/>
        </div>

        <div>
        <div>
        <div>${model.data.users[m.author].username}</div>
        <div>${m.name}</div>
        </div>
        </div>

        <div>${m.description}</div>

        </div>
        `
    })
    .join('')
}

function genchat(key) {
  return '<div>' + model.data.messages
    .filter(m => (m.from == model.app.userID && m.to == key || m.from == key && m.to == model.app.userID))
    .map(m => {
      let currentclass = m.from == model.app.userID ? 'rightmsg' : 'leftmsg'
      return `<div class="${currentclass}">${m.content}</div>`
    })
    .join('') + `</div>
    
    <div>
    <input oninput="model.input.userActivity.message = this.value" id="dminputbox">
    <button onclick="senddm()">Send</button>
    </div>
`
}

function genfriendlist(key) {
  return model.data.users[key].friends.filter(f => f != key).map(key => {
    return /*HTML*/`
    <div id="pfriendcards" onclick="updateview('profileScreen', ${key})">
    
    <div>
    <img src="${model.data.users[key].profilePicture}"/>
    </div>

    <div>
    <div>${model.data.users[key].username}</div>
    </div>

    <div>
    <div>
    <div>${model.data.users[key].friends.length} venner</div>
    <div>${model.data.users[key].projects.length} prosjekter</div>
    </div>
    </div>

    </div>
    `
  }).join('')
}

function gensettings() {
  return /*HTML*/`
    <h2>Endre profil</h2>
    <input type="text" oninput="model.input.editProfile.username = this.value" placeholder="Brukernavn" required/>
    <input type="text" oninput="model.input.editProfile.eMail = this.value" placeholder="Email" required />
    <input type="password" oninput="model.input.editProfile.passwordOne = this.value" placeholder="Passord" required/>
    <input type="password" oninput="model.input.editProfile.passwordTwo = this.value" placeholder="Bekreft passord" required/>
    <input type="text" oninput="model.input.editProfile.firstName = this.value" placeholder="Førstenavn" />
    <input type="text" oninput="model.input.editProfile.lastName = this.value" placeholder="Etternavn" />
    <input type="text" oninput="model.input.editProfile.phoneNr = this.value" placeholder="Telefonnummer" />
    <input type="text" oninput="model.input.editProfile.age = this.value" placeholder="Alder" />
    <input type="text" oninput="model.input.editProfile.country = this.value" placeholder="Land" />
    <input type="text" oninput="model.input.editProfile.city = this.value" placeholder="By" />
    <input type="text" oninput="model.input.editProfile.github = this.value" placeholder="Github link" />
    <input type="text" oninput="model.input.editProfile.linkedIn = this.value" placeholder="LinkedIn" />
    Last opp profilbilde:
    <input type="file" id="fileInput" onchange="fileChange(event)">
    <textarea id="bio" oninput="model.input.editProfile.bio = this.value" placeholder="Bio"></textarea>
    <img id="profilePicture"/>
    <button style="width: 10vh;" onclick="editprofile()">Endre profil</button>
    `
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

