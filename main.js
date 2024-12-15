function darkmode() {
    document.body.classList.toggle("darkmode");
}

document.getElementById("validate-btn").addEventListener("click", function () {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const qcmOptions = document.getElementsByName("qcm");
    const errorList = document.querySelector(".message-error ul");
    const successMessage = document.querySelector(".message-success");

    errorList.innerHTML = ""; 
    let isValid = true;

    if (username.value.length >= 6) {
        username.classList.add("valid");
        username.classList.remove("invalid");
    } else {
        username.classList.add("invalid");
        username.classList.remove("valid");
        errorList.innerHTML += "<li>Le pseudo doit contenir au moins 6 caractères.</li>";
        isValid = false;
    }

    if (/\S+@\S+\.\S+/.test(email.value)) {
        email.classList.add("valid");
        email.classList.remove("invalid");
    } else {
        email.classList.add("invalid");
        email.classList.remove("valid");
        errorList.innerHTML += "<li>Veuillez entrer une adresse email valide.</li>";
        isValid = false;
    }

    if (password.value.length >= 8) {
        password.classList.add("valid");
        password.classList.remove("invalid");
    } else {
        password.classList.add("invalid");
        password.classList.remove("valid");
        errorList.innerHTML += "<li>Le mot de passe doit contenir au moins 8 caractères.</li>";
        isValid = false;
    }

    if (password.value === confirmPassword.value) {
        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
    } else {
        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        errorList.innerHTML += "<li>Les mots de passe ne correspondent pas.</li>";
        isValid = false;
    }

    if (!Array.from(qcmOptions).some(option => option.checked)) {
        errorList.innerHTML += "<li>Veuillez sélectionner un pokèmon.</li>";
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = "block";
        errorList.innerHTML = "";
    } else {
        successMessage.style.display = "none";
    }
});

