function validationForm() {
    var user = document.getElementById('addUser').value;
    var password = document.getElementById('addPass').value;
    var dni = document.getElementById('addDni').value;
    var level = document.getElementById('addLevel').value;
    var email = document.getElementById('addEmail').value;
    var gender = document.getElementById('addGender').value;

    var userError = document.getElementById('userError');
    var passError = document.getElementById('passError');
    var dniError = document.getElementById('dniError');
    var levelError = document.getElementById('levelError');
    var emailError = document.getElementById('emailError');
    var genderError = document.getElementById('genderError');
    var infoError = document.getElementById('infoError');
    var lanError = document.getElementById('lanError');

    var validation = true;

    //Validación usuario

    if (user.trim() === "" || user.length < 8 || user.length > 12) {
        userError.textContent = "ERROR: The user must be between 8 and 12 characters.";
        validation = false;
    } else {
        userError.textContent = ""; 
    }

    //Validación password

    var passwordVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    if (!password.match(passwordVal)) {
        passError.innerHTML = "ERROR: The password must be between 8 and 15 characters long and include at least one uppercase letter, one lowercase letter and one digit.";
        validation = false;
    } else {
        passError.textContent = ""; 
    }

    //Validación dni

    var dniVal = /^\d{8}[a-zA-Z]$/;
    if (!dni.match(dniVal)) {
        dniError.textContent = "ERROR: Incorrect format of the DNI.";
        validation = false;
    } else {
        dniError.textContent = ""; 
    }

    //Validación nivel

    if (level.trim() === "") {
        levelError.textContent = "ERROR: You cannot leave the level field empty.";
        validation = false;
    } else if (isNaN(level)) {
        levelError.textContent = "ERROR: Only numeric values are supported.";
        validation = false;
    } else if (level.trim() < 0 || level.trim() > 254) {
        levelError.textContent = "ERROR: Only the following number range 0-254 is supported.";
        validation = false;
    } else {
        levelError.textContent = "";
    }

    //Validación email

    var emailVal = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!email.match(emailVal)) {
        emailError.textContent = "ERROR: Please enter a valid email address.";
        validation = false;
    } else {
        emailError.textContent = ""; 
    }

    //Validación género

    if(gender.trim() === ""){
        genderError.textContent = "ERROR: The gender field cannot be empty.";
        validation = false;
    }else if(gender.trim() != "male" && gender.trim() != "female" && gender.trim() != "other"){
        genderError.textContent = "ERROR: Invalid values in gender.";
        validation = false;
    }else{
        genderError.textContent = "";
    }
    
    //Validación recibir info

    var selectedOption = document.querySelector('input[name="receiveInfo"]:checked');

    if (!selectedOption) {
        validation = false;
        infoError.textContent = "ERROR: You must select an option.";
    }else{
        infoError.textContent = "";
    }

    //Validación idiomas
    var selectedCheckboxes = document.querySelectorAll('input[name="languages"]:checked');

    if (selectedCheckboxes.length < 2 || selectedCheckboxes.length > 3) {
        lanError.textContent = "ERROR: You must select between two and three languages.";
        validation = false;
    } else {
        lanError.textContent = "";
    }

        return validation;
        
    }

    

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        this.submit(); 
    }
});