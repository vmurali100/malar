function addUser() {
  // oop
  //   function Person(fname, lname, email) {
  //     this.fname = fname;
  //     this.lname = lname;
  //     this.email = email;
  //   }

  //   var user = new Person("ram", "ravi", "ravi@gmail.com");
  var user = {
    fname: "",
    lname: "",
    email: "",
  };

  for (a in user) {
    user[a] = document.getElementById(a).value;
  }

  console.log(user);
  sendDataToServer(user);
}

function sendDataToServer(user) {
  var sendInfo = new XMLHttpRequest();
  console.log(sendInfo);
  sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
      console.log(sendInfo.response);
    }
  };
  sendInfo.open("POST", "http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(user));
}
