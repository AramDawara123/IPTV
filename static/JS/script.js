document.addEventListener("DOMContentLoaded", function() {
    var password = document.getElementById("register-password");
    var confirm_password = document.getElementById("confirm-password");

    function validatePassword() {
        if (password.value !== confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.addEventListener('change', validatePassword);
    confirm_password.addEventListener('keyup', validatePassword);
});
