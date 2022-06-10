function redirect() {
    inputEmail = document.getElementById("inputEmail").value
    console.log("Email: " + inputEmail);
    inputPassword = document.getElementById("inputPassword").value
    console.log("Password: " + inputPassword);

    localStorage.setItem("email", inputEmail);
    localStorage.setItem("password", inputPassword);

    if (localStorage.getItem('email') == "admin") {
        location.href = "pages/admin-dashboard.html";
    } else if (localStorage.getItem('email') == "worker") {
        location.href = "pages/worker-dashboard.html";
    }
}