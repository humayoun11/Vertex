function submit() {
  var comment = document.getElementById('commenttext').value

  localStorage.setItem('localcomment', comment)
}
