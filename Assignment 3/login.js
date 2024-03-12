// login.js
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var messageBox = document.getElementById('messageBox');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();

        // Make an API call to fetch user data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // Check if username exists and password matches
                var user = users.find(user => user.username === usernameValue);
                if (user && user.email === passwordValue) {
                    // Successful login
                    displayMessage('success', 'Login Successful!');
                } else {
                    // Invalid credentials
                    displayMessage('error', 'Invalid username or useremail. Please try again.');
                }
            })
            .catch(error => {
                // Error in fetching data from API
                displayMessage('error', 'Error in fetching user data.');
            });
    });

    // Function to display messages
    function displayMessage(type, message) {
        messageBox.textContent = message;
        messageBox.className = 'message-' + type;
    }
});
