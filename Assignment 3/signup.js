// signup.js
document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signupForm');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var signupMessage = document.getElementById('signupMessage');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var passwordValue = passwordInput.value;
        var confirmPasswordValue = confirmPasswordInput.value;

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return;
        } else {
            confirmPasswordError.textContent = ''; // Clear error message
        }

        // Redirect after successful signup
        window.location.href = "login.html";
    });

    // Real-time password matching check
    confirmPasswordInput.addEventListener('input', function () {
        var passwordValue = passwordInput.value;
        var confirmPasswordValue = confirmPasswordInput.value;

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = 'Passwords do not match.';
        } else {
            confirmPasswordError.textContent = ''; // Clear error message
        }
    });
});
