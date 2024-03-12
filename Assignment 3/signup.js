// signup.js
document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signupForm');
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var signupMessage = document.getElementById('signupMessage');
    var errorBox = document.getElementById('errorBox');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var usernameValue = usernameInput.value.trim();
        var emailValue = emailInput.value.trim();
        var passwordValue = passwordInput.value;
        var confirmPasswordValue = confirmPasswordInput.value;

        // Validate username
        if (!isValidUsername(usernameValue)) {
            usernameError.textContent = 'Check the Username.';
        } else {
            usernameError.textContent = ''; // Clear error message
        }

        // Validate email
        if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Check the Email.';
        } else {
            emailError.textContent = ''; // Clear error message
        }

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = "Password doesn't match.";
        } else {
            confirmPasswordError.textContent = ''; // Clear error message
        }

        // Show success message if no errors
        if (!usernameError.textContent && !emailError.textContent && !confirmPasswordError.textContent) {
            signupMessage.textContent = 'Signing up was successful.';
            signupMessage.style.color = 'green';
            signupForm.reset(); // Clear form fields
        }
    });

    // Real-time username validation
    usernameInput.addEventListener('input', function () {
        var usernameValue = usernameInput.value.trim();
        if (!isValidUsername(usernameValue)) {
            usernameError.textContent = 'Check the Username.';
        } else {
            usernameError.textContent = ''; // Clear error message
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', function () {
        var emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Check the Email.';
        } else {
            emailError.textContent = ''; // Clear error message
        }
    });

    // Real-time password matching check
    confirmPasswordInput.addEventListener('input', function () {
        var passwordValue = passwordInput.value;
        var confirmPasswordValue = confirmPasswordInput.value;

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = "Password doesn't match.";
        } else {
            confirmPasswordError.textContent = ''; // Clear error message
        }
    });
// Function to validate username
    function isValidUsername(username) {
        // Username must be between 3 and 20 characters long
        // Must start with a letter
        // Can only contain alphanumeric characters, hyphens, and underscores
        // Cannot contain spaces or special characters other than hyphens and underscores
        return /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(username);
    }


    // Function to validate password
    function isValidPassword(password) {
        // Password must be at least 8 characters long
        // Must contain at least one uppercase letter, one lowercase letter, one number, and one special character
        // Allowed special characters: !@#$%^&*()-_=+[]{}|;:'",.<>?/`~
        // Cannot contain spaces
        var isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/.test(password);
        return isValid;
    }

    // Inside the input event listener for the password field
    passwordInput.addEventListener('input', function () {
        var passwordValue = passwordInput.value.trim();
        if (!isValidPassword(passwordValue)) {
            passwordError.textContent = 'Check the Password';
        } else {
            passwordError.textContent = ''; // Clear error message
        }
    });

});
