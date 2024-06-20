function validationForm() {
    var user = document.getElementById('loginUser').value;
    var password = document.getElementById('loginPass').value;
    var userError = document.getElementById('userError');
    var passError = document.getElementById('passError');
    
    var validation = true;

    // Reseteo estilado de campos erroneos
    document.querySelectorAll('.error-field').forEach(function (el) {
        el.classList.remove('error-field');
    });

    // Reseteo estilado de mensaje de error
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.textContent = "";
    });

    // Validación de usuario
    if (user.trim() === "" || user.length < 8 || user.length > 12) {
        userError.textContent = "ERROR: The user must be between 8 and 12 characters.";
        document.getElementById('loginUser').classList.add('error-field');
        validation = false;
    }

    // Validación de contraseña
    var passVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    if (!password.match(passVal)) {
        passError.innerHTML = "ERROR: The password must be between 8 and 15 characters long and include at least one uppercase letter, one lowercase letter and one digit.  <br> <br>";
        document.getElementById('loginPass').classList.add('error-field');
        validation = false;
    }

    return validation;
}