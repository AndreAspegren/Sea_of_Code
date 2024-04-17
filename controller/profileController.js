document.querySelectorAll('.nav ul li').forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    // Add 'active' class to the clicked tab and remove it from siblings
    tab.classList.add("active");
    document.querySelectorAll('.nav ul li').forEach(function(sibling) {
      if (sibling !== tab) {
        sibling.classList.remove('active');
      }
    });

    // Hide all tabs and show the one with the corresponding index
    document.querySelectorAll('.tab').forEach(function(tabContent, tabIndex) {
      if (tabIndex === index) {
        tabContent.style.display = 'block';
      } else {
        tabContent.style.display = 'none';
      }
    });
  });
});

function logOff() {
  let currentUserId = model.app.userID;
  let currentUser = model.data.users.find(user => user.id === currentUserId);
  if (currentUser) {
    console.log(`logging off user: ${currentUser.username}, Password: ${currentUser.passwordOne}`);
  }
  model.app.loggedIn = false;
  model.app.userID = null;
  updateview('homescreen');
}

let bio = document.querySelector('.bio');

function bioText() {
  bio.oldText = bio.innerText;
  bio.innerText = bio.innerText.substring(0, 100) + "...";
  bio.innerHTML += "&nbsp;" + `<span onclick='addLength()' id='see-more-bio'> See More </span>`;
}

bioText();

function addLength() {
  bio.innerHTML = bio.oldText;
  bio.innerHTML += "&nbsp;" + `<span onclick='bioText()' id='see-less-bio'> See Less </span>`;
}

function sendmsg(){
  model.data.messages.push({
    from: model.app.userID, 
    to: model.app.currentprofile, 
    Datesent: new Date().toISOString().substr(0, 16).replace('T', ' '), 
    content: model.input.userActivity.message,
  });
  updateview();
}

