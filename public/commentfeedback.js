function submit() {
  let uvirusname = document.getElementById('virus').value,
    userdetailname = localStorage.getItem('localUsername'),
    commenttext = document.getElementById('commenttext').value

  var comment = JSON.parse(localStorage.getItem('comment')) || []

  let exist =
    comment.length &&
    JSON.parse(localStorage.getItem('comment')).some(
      (data) =>
        data.id &&
        data.uvirusname.toLowerCase() == uvirusname.toLowerCase() &&
        data.userdetailname.toLowerCase() == userdetailname.toLowerCase() &&
        data.commenttext.toLowerCase() == commenttext.toLowerCase(),
    )

  if (!exist) {
    comment.push({ uvirusname, userdetailname, commenttext })
    localStorage.setItem('comment', JSON.stringify(comment))

    alert('comment successfull')
    // ((window.location.href = 'loginsignup.html'),)
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up')
  }
  e.preventDefault()
}
