var selectpage = document.getElementById('selectpage')
var loginpage = document.getElementById('loginpage')
var registrationpage = document.getElementById('registrationpage')
var showuser = (document.getElementById('showusername').innerHTML = localUser)

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

window.onclick = function (event) {
  if (event.target == loginpage) {
    loginpage.style.display = 'none'
  }
}

function registration() {
  let username = document.getElementById('RUser').value,
    email = document.getElementById('REmail').value,
    password = document.getElementById('RPassword').value,
    number = document.getElementById('RNumber').value

  let formData = JSON.parse(localStorage.getItem('formData')) || []

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
      data.id &&
        data.username.toLowerCase() == username.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase() &&
        data.number.toLowerCase() == number.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase(),
    )

  if (!exist) {
    formData.push({ username, email, password, number })
    localStorage.setItem('formData', JSON.stringify(formData))
    document.querySelector('form').reset()
    document.getElementById('RUser').focus()
    alert('registration successfull')(
      (window.location.href = 'loginsignup.html'),
    )
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up')
  }
  e.preventDefault()
}

function login() {
  var adminuser = 'admin'
  var adminpassword = 'admin123'
  var showuser = document.getElementById('showusername')
  let username = document.getElementById('loginUser').value,
    password = document.getElementById('loginPassword').value
  let formData = JSON.parse(localStorage.getItem('formData')) || []
  localStorage.setItem('localUsername', username)
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
        data.username.toLowerCase() == username ||
        (adminuser == username && data.password.toLowerCase() == password) ||
        adminpassword == password,
    )

  if (
    formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(
      (data) =>
        data.username.toLowerCase() == username &&
        data.password.toLowerCase() == password,
    )
  ) {
    alert('login successfully ' + localStorage.localUsername)
    ;(window.location.href = 'userhome.html'), (showuser.innerHTML = localUser)
  }
  if (username == adminuser && password == adminpassword) {
    alert(' Wellcome Admin ')
    ;(window.location.href = 'adminhome.html'), (showuser.innerHTML = adminuser)
  }
  if (!exist) {
    alert('incorrect username or password')
  }
  e.preventDefault()
}
function add_text_input() {
  var table = document.getElementById('mytable')
  var x = table.rows.length
  table.insertRow(-1).innerHTML =
    '<tr>' +
    '<td> <input type="text" id="username' +
    x +
    '" /></td>' +
    '<td> <input type="text" id="email' +
    x +
    '" /></td>' +
    '<td> <input type="text" id="number' +
    x +
    '" /></td></tr>'
}
function save_data() {
  var table = document.getElementById('mytable')
  var tableRows = table.rows.length
  var data = []
  for (var i = 1; i <= tableRows - 1; i++) {
    var title = document.getElementById('username' + i).value
    var desc = document.getElementById('useremail' + i).value
    var desc = document.getElementById('usernumber' + i).value
    var desc = document.getElementById('userpassword' + i).value
    var temp = { title: title, description: desc }
    data.push(temp)
  }
  window.localStorage.setItem('UserDeatil', JSON.stringify(data))
}
loadData = function () {
  let data = JSON.parse(window.localStorage.getItem('Table1'))
  for (i = 0; i < data.length; i++) {
    add_text_input()
    document.getElementById('username' + (i + 1)).value = data[i].username
    document.getElementById('email' + (i + 1)).value = data[i].email
    document.getElementById('password' + (i + 1)).value = data[i].password
    document.getElementById('number' + (i + 1)).value = data[i].number
  }
}

loadData()

var showuser = (document.getElementById('showusername').innerHTML = localUser)
