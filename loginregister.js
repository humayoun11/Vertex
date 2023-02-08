var selectpage = document.getElementById('selectpage')
var loginpage = document.getElementById('loginpage')
var registrationpage = document.getElementById('registrationpage')
var showuser = (document.getElementById('showusername').innerHTML = localUser)

function loginpageselect() {
  selectpage.style.display = 'none'
  loginpage.style.display = 'flex'
  registrationpage.style.display = 'none'
}
function registrationpageselect() {
  selectpage.style.display = 'none'
  loginpage.style.display = 'none'
  registrationpage.style.display = 'flex'
}
function registration() {
  var username = document.getElementById('RUser').value
  var email = document.getElementById('REmail').value
  var password = document.getElementById('RPassword').value

  localStorage.setItem('localUsername', username)
  localStorage.setItem('localUserEmail', email)
  localStorage.setItem('localUserPassword', password)
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

  var localUser = localStorage.getItem('localUsername')
  var localPass = localStorage.getItem('localUserPassword')

  //   document.getElementById('showusername').innerHTML = localUser
  if (user == localUser && password == localPass) {
    alert('login successfully ' + localStorage.localUsername)
    ;(window.location.href = 'userhome.html'), (showuser.innerHTML = localUser)
  }
  if (user == adminuser && password == adminpassword) {
    alert(' Wellcome Admin ')
    ;(window.location.href = 'home.html'), (showuser.innerHTML = adminuser)
  } else {
    alert('kindly pleasee correct your credentials')
  }
}
var showuser = (document.getElementById('showusername').innerHTML = localUser)
