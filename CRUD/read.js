var users = [];
function getAllUsersFromServer() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      console.log(getInfo.response);
      users = JSON.parse(getInfo.response);
      console.log(users);
      displayAllUsers();
    }
  };
  getInfo.open("GET", "http://localhost:3000/users");
  getInfo.send();
}

getAllUsersFromServer();

function displayAllUsers() {
  users.map((user) => {
    var myTr = document.createElement("tr");
    for (a in user) {
      var td = document.createElement("td");
      td.innerHTML = user[a];
      myTr.appendChild(td);
    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");

    editTd.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.getElementById("myUsers").appendChild(myTr);
  });
}
