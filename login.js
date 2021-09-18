function login(){
    var uname= document.getElementById('username').nodeValue
    var pass= document.getElementById('password').nodeValue

    if (uname =="world" && pass == "123") {
        location.assign("file:///Users/shannonmettry/Desktop/Login%20Page/page.html")
    }
    else {
        window.alert("Login Failed")
    }
}