// function tabs(value){
//   const navbaritems = document.querySelectorAll('.nav ul li')
//   navbaritems.forEach(function(item) {
//     item.classList.remove('active')
//   })
//   navbaritems[value -1].classList.add('active')
// }

function tabs(key) {
  var header = document.getElementById("nav");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
      });
  }
}

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


// let bio = document.querySelector('.bio');

// function bioText() {
//   bio.oldText = bio.innerText;
//   bio.innerText = bio.innerText.substring(0,100) + "...";
//   bio.innerHTML += "&nbsp;" + `<span onclick='addLength()' id='see-more-bio'> See More </span>`;
// }

// bioText();

// function addLength() {
//   bio.innerHTML =bio.oldText;
//   bio.innerHTML += "&nbsp;" + `<span onclick='bioText()' id='see-less-bio'> See Less </span>`;
// }
