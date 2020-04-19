function editUser(index) {
  i = index;
  let user = users[index];
  for (a in user) {
    if (a !== "id") {
      document.getElementById(a).value = user[a];
    }
  }
  toggleButtons(true);
}

function updateUser() {
  var user = users[i];
  for (a in user) {
    if (a !== "id") {
      user[a] = document.getElementById(a).value;
    }
  }

  var updateInfo = new XMLHttpRequest();
  updateInfo.onreadystatechange = function () {
    if (updateInfo.readyState == 4 && updateInfo.status == 200) {
      displayAllUsers();
    }
  };
  updateInfo.open("PUT", "http://localhost:3000/users/" + user.id, user);
  updateInfo.setRequestHeader("Content-Type", "application/json");
  updateInfo.send(JSON.stringify(user));
  toggleButtons(false);
}

function toggleButtons(isEdit) {
  if (isEdit) {
    document.getElementById("update").style.display = "block";
    document.getElementById("submit").style.display = "none";
  } else {
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
  }
}
