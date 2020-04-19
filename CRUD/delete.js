function deleteUser(index) {
  var delteInfo = new XMLHttpRequest();
  delteInfo.onreadystatechange = function () {
    if (delteInfo.readyState == 4 && delteInfo.status == 200) {
      displayAllUsers();
    }
  };
  delteInfo.open("DELETE", "http://localhost:3000/users/" + users[index].id);
  delteInfo.send();
}
