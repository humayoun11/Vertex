var selectpage = document.getElementById('selectpage')
var loginpage = document.getElementById('loginpage')
var registrationpage = document.getElementById('registrationpage')
var showuser = (document.getElementById('showusername').innerHTML = localUser)
var adminuser = 'admin'
var adminpassword = 'admin123'
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

function loginpageselect() {
  console.log('humayoun')
  selectpage.style.display = 'none'
  loginpage.style.display = 'flex'
  registrationpage.style.display = 'none'
}
function registrationpageselect() {
  console.log('humayoun')
  selectpage.style.display = 'none'
  loginpage.style.display = 'none'
  registrationpage.style.display = 'flex'
}
// span.onclick = function() {
//   console.log('humayoun')
//   selectpage.style.display = 'flex';
//   loginpage.style.display = "none";
//   registrationpage.style.display = 'none';
// }
// function close() {
//   console.log('humayoun')
//   loginpage.style.display = "none";
//   registrationpage.style.display = 'none';

// }
window.onclick = function (event) {
  if (event.target == loginpage) {
    loginpage.style.display = 'none'
  }
}
function registration() {
  var username = document.getElementById('RUser').value
  var email = document.getElementById('REmail').value
  var password = document.getElementById('RPassword').value
  var number = document.getElementById('RNumber').value

  localStorage.setItem('notapprovedUsername', username)
  localStorage.setItem('notapprovedUserEmail', email)
  localStorage.setItem('notapprovedUserPassword', password)
  localStorage.setItem('notapprovedUsernumber', number)
  if (username.length >= 6 && email.length >= 6 && password.length >= 6) {
    alert('registration successfull')(
      (window.location.href = 'loginsignup.html'),
    )
  } else {
    alert('Please Fill Complete form')
  }
}
function login() {
  var adminuser = 'admin'
  var adminpassword = 'admin123'
  var showuser = document.getElementById('showusername')
  var user = document.getElementById('loginUser').value
  var password = document.getElementById('loginPassword').value
  var showuser = document.getElementById('showusername')

  var localUser = localStorage.getItem('notapprovedUsername')
  var localPass = localStorage.getItem('notapprovedUserPassword')

  var notapproveduser = localStorage.getItem('notapprovedUsername')
  var notapproveduser = localStorage.getItem('notapprovedUserPassword')

  if (user == localUser && password == localPass) {
    alert('login successfully ' + localStorage.localUsername)
    ;(window.location.href = 'userhome.html'), (showuser.innerHTML = localUser)
  }

  //   document.getElementById('showusername').innerHTML = localUser
  if (user == notapproveduser && password == notapproveduser) {
    alert(
      'Dear ' +
        localStorage.notapprovedUsername +
        ' your account under approval please wait admin will approved your account with in 24 hours',
    )
    showuser.innerHTML = localUser
  }

  // if (user == localUser && password == localPass) {
  //   alert('login successfully ' + localStorage.localUsername)
  //   ;(window.location.href = 'userhome.html'), (showuser.innerHTML = localUser)
  // }
  if (user == adminuser && password == adminpassword) {
    alert(' Wellcome Admin ')
    ;(window.location.href = 'adminhome.html'), (showuser.innerHTML = adminuser)
  } else {
    alert('kindly pleasee correct your credentials')
  }
}
var showuser = (document.getElementById('showusername').innerHTML = localUser)
