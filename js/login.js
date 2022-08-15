let login = document.getElementById("log-in");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirm-pass");

email.addEventListener("keyup", function (event) {
  if (event.target.value === "email@gmail.com") {
    confirmPass.removeAttribute("disabled");
    password.removeAttribute("disabled");
  } else {
    confirmPass.setAttribute("disabled", "true");
    password.setAttribute("disabled", "true");
    login.style.cursor = "auto";
  }
});

password.addEventListener("keyup", function (event) {
  if (event.target.value === confirmPass.value && password.value.length >= 5) {
    login.style.opacity = "1";
    login.style.cursor = "pointer";
  } else {
    login.style.opacity = "0.5";
    login.style.cursor = "auto";
  }
});

confirmPass.addEventListener("keyup", function (event) {
  if (event.target.value === password.value) {
    login.style.opacity = "1";
    login.style.cursor = "pointer";
  } else {
    login.style.opacity = "0.5";
    login.style.cursor = "auto";
  }
});

login.addEventListener("click", function (event) {
  if (email.value == "email@gmail.com" && password.value == confirmPass.value) {
    login.href = "https://web.facebook.com/zuck?_rdc=1&_rdr";
  }
});
